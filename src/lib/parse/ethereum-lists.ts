/**
 * @fileoverview
 * This file uses fs.readdir in a pure JS Git context, so it relies on
 * graceful-fs to prevent EMFILE errors in serverless environments.
 */

import { filter, matchesProperty, partition } from 'lodash';

import { parseJsonFile, validateTokenData } from './parser';
import { RawEthereumListsToken } from '../../constants';
import { ETHEREUM_LISTS_REPO, Token } from '../../constants';
import { fetchRepository } from '../../utils/fetch-repository';
import { mapDir } from '../../utils/mapDir';

/**
 * Partition tokens array into two categories: unique vs duplicates, according to
 * their token symbol
 *
 * @param {Token[]} tokens
 * @return {Token[][]}
 */
export const partitionByUniqueness = (tokens: Token[]): Token[][] => {
  const [uniqueTokens, duplicateTokens] = partition(tokens, token => {
    const dups = filter(tokens, ['symbol', token.symbol]);
    return dups.length === 1;
  });
  return [uniqueTokens, duplicateTokens];
};

/**
 * Finds deprecated tokens and replaces them with the data
 * for the latest version of the token
 *
 * @param {Token[]} tokens
 *
 * @return {Token[]}
 */
export function resolveDeprecations(tokens: Token[]): Token[] {
  return tokens.map(({ deprecation, ...token }: Token) => {
    return !deprecation?.new_address
      ? token
      : tokens.find(matchesProperty('address', deprecation.new_address)) ||
          token;
  });
}

/**
 * Load the token JSON files from directory, and then validate them
 * against our token schema
 *
 * @return {Token[]}
 */
export async function parseEthereumListsTokenFiles(
  extractedAt: string
): Promise<Token[]> {
  const fileMap = async (file: string) => {
    const tokenData = await parseJsonFile<RawEthereumListsToken>(file);
    return validateTokenData(tokenData);
  };

  const results: Token[] = await mapDir({ dir: extractedAt, fileMap });
  return results;
}

/**
 * Fetch the latest commit from `ethereum-lists/tokens` repo and parse
 * the saved JSON files
 *
 * @return {Token[][]}
 */
export default async function parseEthereumLists(): Promise<Token[][]> {
  const extractedAt = await fetchRepository(ETHEREUM_LISTS_REPO);

  const tokenLists: Token[][] = await parseEthereumListsTokenFiles(extractedAt)
    .then(resolveDeprecations)
    .then(partitionByUniqueness);

  return tokenLists;
}
