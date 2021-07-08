"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.build = void 0;
const tslib_1 = require("tslib");
const lodash_1 = require("lodash");
const contract_map_js_1 = tslib_1.__importDefault(require("./parse/contract-map.js"));
const ethereum_lists_js_1 = tslib_1.__importDefault(require("./parse/ethereum-lists.js"));
const overrides_js_1 = tslib_1.__importDefault(require("./parse/overrides.js"));
const svg_icons_js_1 = tslib_1.__importDefault(require("./parse/svg-icons.js"));
const token_lists_js_1 = tslib_1.__importDefault(require("./parse/token-lists.js"));
const parser_js_1 = require("./parse/parser.js");
const address_1 = require("@ethersproject/address");
const constants_1 = require("../../../src/constants");
function normalizeList(list) {
    return lodash_1.keyBy(list, ({ address }) => address_1.getAddress(address));
}
async function build() {
    /**
     * Parse all of the data we need for the Token List build process. Run
     * concurrently, since we do not need to execute in a serverless environment,
     * but disable this if that changes.
     */
    const [rainbowOverrides, contractMapTokens, svgIcons, tokenListTokens, [uniqueEthereumListTokens, duplicateEthereumListTokens],] = await Promise.all([
        overrides_js_1.default(),
        contract_map_js_1.default(),
        svg_icons_js_1.default(),
        token_lists_js_1.default(),
        ethereum_lists_js_1.default(),
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
                .map(({ tokens }) => tokens)
                .flat(),
        ].map(normalizeList),
    };
    const defaultSources = lodash_1.merge({}, ...sources.default);
    const allKnownTokenAddresses = lodash_1.uniq(lodash_1.compact([
        ...sources.default.map(Object.keys).flat(),
        ...sources.preferred.map(Object.keys).flat(),
    ]).map(address_1.getAddress));
    function resolveTokenInfo(tokenAddress) {
        function matchToken({ address }) {
            return lodash_1.toLower(address) === lodash_1.toLower(tokenAddress);
        }
        const lists = lodash_1.pick(tokenListTokens, Object.keys(tokenListTokens).filter((list) => lodash_1.some(tokenListTokens[list].tokens, matchToken)));
        if (Object.keys(lists).length === 1) {
            return lodash_1.find(lists[Object.keys(lists)[0]].tokens, matchToken);
        }
        else if (Object.keys(lists).length > 1) {
            const listNames = Object.keys(lists);
            if (listNames.includes(constants_1.TokenListEnumSchema.enum.synthetix)) {
                return lodash_1.find(lists.synthetix.tokens, matchToken);
            }
            else if (listNames.includes(constants_1.TokenListEnumSchema.enum.aave)) {
                return lodash_1.find(lists.aave.tokens, matchToken);
            }
            else if (listNames.includes(constants_1.TokenListEnumSchema.enum.roll)) {
                return lodash_1.find(lists.roll.tokens, matchToken);
            }
            else if (listNames.includes(constants_1.TokenListEnumSchema.enum.dharma)) {
                return lodash_1.find(lists.dharma.tokens, matchToken);
            }
            else if (listNames.includes(constants_1.TokenListEnumSchema.enum.kleros)) {
                return lodash_1.find(lists.kleros.tokens, matchToken);
            }
            else if (listNames.includes(constants_1.TokenListEnumSchema.enum.wrapped)) {
                return lodash_1.find(lists.wrapped.tokens, matchToken);
            }
            else if (listNames.includes(constants_1.TokenListEnumSchema.enum.coingecko)) {
                return lodash_1.find(lists.coingecko.tokens, matchToken);
            }
        }
        return defaultSources[tokenAddress];
    }
    function buildTokenList() {
        return allKnownTokenAddresses.map((tokenAddress) => {
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
            const extensions = {
                color: overrideToken?.color || color,
                isRainbowCurated: overrideToken?.isCurated ? true : undefined,
                isVerified: isVerified || overrideToken?.isCurated
                    ? true
                    : !!overrideToken?.isVerified || undefined,
                shadowColor: overrideToken?.shadowColor || shadowColor,
            };
            return parser_js_1.deeplyTrimAllTokenStrings({
                address: tokenAddress,
                chainId,
                decimals,
                name: overrideToken?.name || name,
                symbol: overrideToken?.symbol || symbol,
                ...(lodash_1.compact(Object.values(extensions)).length
                    ? { extensions }
                    : undefined),
            });
        });
    }
    const tokens = await parser_js_1.sortTokens(buildTokenList());
    console.log('# of "isRainbowCurated" tokens: ', lodash_1.filter(tokens, lodash_1.matchesProperty('extensions.isRainbowCurated', true)).length);
    console.log('# of "isVerified" tokens: ', lodash_1.filter(tokens, lodash_1.matchesProperty('extensions.isVerified', true)).length);
    return tokens;
}
exports.build = build;
//# sourceMappingURL=build.js.map