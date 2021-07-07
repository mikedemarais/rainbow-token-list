import {
  compact,
  filter,
  find,
  keyBy,
  matchesProperty,
  merge,
  pick,
  some,
  toLower,
  uniq,
} from 'lodash-es';

import parseContractMap from './parse/contract-map';
import parseEthereumLists from './parse/ethereum-lists';
import parseOverrides from './parse/overrides';
import parseSVGIconTokenFiles from './parse/svg-icons';
import parseTokenLists from './parse/token-lists';

import { getAddress } from '@ethersproject/address';
import { Token, TokenExtensionsType, TokenListEnumSchema } from '../constants';
import { deeplyTrimAllTokenStrings, sortTokens } from './parse/parser';

function normalizeList(list: any[]) {
  return keyBy(list, ({ address }) => getAddress(address));
}

export async function build(): Promise<Token[]> {
  /**
   * Parse all of the data we need for the Token List build process. Run
   * concurrently, since we do not need to execute in a serverless environment,
   * but disable this if that changes.
   */
  const [
    rainbowOverrides,
    contractMapTokens,
    svgIcons,
    tokenListTokens,
    [uniqueEthereumListTokens, duplicateEthereumListTokens],
  ] = await Promise.all([
    parseOverrides(),
    parseContractMap(),
    parseSVGIconTokenFiles(),
    parseTokenLists(),
    parseEthereumLists(),
  ]).catch(e => {
    throw new Error(`Could not load all token resources: ${e}`);
  });
  // const rainbowOverrides = await parseOverrides();
  // const contractMapTokens = await parseContractMap();
  // const svgIcons = await parseSVGIconTokenFiles();
  // const tokenListTokens = await parseTokenLists();
  // const [
  //   uniqueEthereumListTokens,
  //   duplicateEthereumListTokens,
  // ] = await parseEthereumLists();

  const { coingecko, ...preferredTokenLists } = tokenListTokens;
  const sources = {
    default: [
      duplicateEthereumListTokens,
      uniqueEthereumListTokens,
      contractMapTokens,
      coingecko.tokens.flat(),
    ].map(normalizeList),
    preferred: [
      Object.values(preferredTokenLists)
        .map(({ tokens }: any) => tokens)
        .flat(),
    ].map(normalizeList),
  };

  const defaultSources: any = merge({}, ...sources.default);
  const allKnownTokenAddresses: any = uniq(
    compact([
      ...sources.default.map(Object.keys).flat(),
      ...sources.preferred.map(Object.keys).flat(),
    ]).map(getAddress)
  );

  function resolveTokenInfo(tokenAddress: string) {
    function matchToken({ address }: Token): boolean {
      return toLower(address) === toLower(tokenAddress);
    }

    const lists = pick(
      tokenListTokens,
      Object.keys(tokenListTokens).filter((list: any) =>
        some(tokenListTokens[list].tokens, matchToken)
      )
    );

    if (Object.keys(lists).length === 1) {
      return find(lists[Object.keys(lists)[0]].tokens, matchToken);
    } else if (Object.keys(lists).length > 1) {
      const listNames = Object.keys(lists);
      if (listNames.includes(TokenListEnumSchema.enum.synthetix)) {
        return find(lists.synthetix.tokens, matchToken);
      } else if (listNames.includes(TokenListEnumSchema.enum.aave)) {
        return find(lists.aave.tokens, matchToken);
      } else if (listNames.includes(TokenListEnumSchema.enum.roll)) {
        return find(lists.roll.tokens, matchToken);
      } else if (listNames.includes(TokenListEnumSchema.enum.dharma)) {
        return find(lists.dharma.tokens, matchToken);
      } else if (listNames.includes(TokenListEnumSchema.enum.kleros)) {
        return find(lists.kleros.tokens, matchToken);
      } else if (listNames.includes(TokenListEnumSchema.enum.wrapped)) {
        return find(lists.wrapped.tokens, matchToken);
      } else if (listNames.includes(TokenListEnumSchema.enum.coingecko)) {
        return find(lists.coingecko.tokens, matchToken);
      }
    }

    return defaultSources[tokenAddress];
  }

  function buildTokenList() {
    return allKnownTokenAddresses.map((tokenAddress: string) => {
      const token = resolveTokenInfo(tokenAddress);
      const overrideToken = rainbowOverrides[tokenAddress];

      let { chainId = 1, color, decimals, name, shadowColor, symbol } = token;

      const isVerified = sources.preferred
        .map(Object.keys)
        .flat()
        .includes(tokenAddress);

      if (isVerified) {
        const logoData = svgIcons.find(item => item.symbol === symbol);
        color = logoData?.color;
      }

      const extensions: TokenExtensionsType = {
        color: overrideToken?.color || color,
        isRainbowCurated: overrideToken?.isCurated ? true : undefined,
        isVerified:
          isVerified || overrideToken?.isCurated
            ? true
            : !!overrideToken?.isVerified || undefined,
        shadowColor: overrideToken?.shadowColor || shadowColor,
      };

      return deeplyTrimAllTokenStrings({
        address: tokenAddress,
        chainId,
        decimals,
        name: overrideToken?.name || name,
        symbol: overrideToken?.symbol || symbol,
        ...(compact(Object.values(extensions)).length
          ? { extensions }
          : undefined),
      });
    });
  }

  const tokens = await sortTokens(buildTokenList());

  console.log(
    '# of "isRainbowCurated" tokens: ',
    filter(tokens, matchesProperty('extensions.isRainbowCurated', true)).length
  );
  console.log(
    '# of "isVerified" tokens: ',
    filter(tokens, matchesProperty('extensions.isVerified', true)).length
  );

  return tokens;
}
