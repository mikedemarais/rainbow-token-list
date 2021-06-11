/**
 * @fileoverview
 * This file uses fs.readdir in a pure JS Git context, so it relies on
 * graceful-fs to prevent EMFILE errors in serverless environments.
 */

import filter from 'lodash/filter';
import matchesProperty from 'lodash/matchesProperty';
import partition from 'lodash/partition';
import pLimit from 'p-limit';
import { parseJsonFile, validateTokenData } from './parser';

import { resolve } from 'path';

import { RawEthereumListsToken } from '../../constants';
import { ETHEREUM_LISTS_REPO, Token } from '../../constants';

import { fetchRepository } from '../../utils/git';
import { tmpdir } from 'os';
import { promises as fs } from 'graceful-fs';

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

type FileMap<T> = (file: string) => Promise<T>;

interface ReaddirMapArgs<T> {
  dir: string;
  fileMap: FileMap<T>;
  limit?: number;
}

export async function readdirMap<T>({
  dir,
  fileMap,
  limit = 10
}: ReaddirMapArgs<T>) {
  /**
   * Run in a pool to prevent EMFILE errors in serverless context.
   */
  const pool = pLimit(limit);
  /**
   * Resolve dir and load files.
   */
  dir = resolve(dir);
  const files = await fs.readdir(dir);

  const resultPromises: (() => Promise<T>)[] = files.map(
    (file) => async () => await fileMap(resolve(dir, file))
  );

  const results: T[] = await Promise.all(
    resultPromises.map(resultPromise => pool(async () => await resultPromise()))
  );

  return results;
}

/**
 * Load the token JSON files from directory, and then validate them
 * against our token schema
 *
 * @return {Token[]}
 */
export async function parseEthereumListsTokenFiles(): Promise<Token[]> {
  const dir = resolve(tmpdir(), ETHEREUM_LISTS_REPO);
  const fileMap = async (file: string) => {
    const tokenData = await parseJsonFile<RawEthereumListsToken>(file);
    return validateTokenData(tokenData);
  }
  const results = await readdirMap({
    dir,
    fileMap,
  });
  
  return results;
  // const tempDir = resolve(tmpdir(), ETHEREUM_LISTS_REPO);
  // const files = readdirSync(tempDir);
  // console.log(`Files to read`, files.length);

  // /**
  //  * Run in a pool to prevent EMFILE errors in serverless context.
  //  */
  // const limit = pLimit(10);
  // const tokens: Token[] = [];

  // const tokenPromises: (() => Promise<Token>)[] = files.map(
  //   file => async () => {
  //     const jsonFile = resolve(tempDir, file);
  //     const tokenData = await parseJsonFile<RawEthereumListsToken>(jsonFile);
  //     return validateTokenData(tokenData);
  //   }
  // );

  // const resolvedTokens = await Promise.all(
  //   tokenPromises.map(tokenPromise => limit(async () => await tokenPromise()))
  // );

  // // while (tokenPromises.length) {
  // //   const tokenBatch = await Promise.all(tokenPromises.splice(0, 10));
  // //   tokens.push(...tokenBatch);
  // // }

  // tokens.push(...resolvedTokens);
  // return tokens;
}

/**
 * Fetch the latest commit from `ethereum-lists/tokens` repo and parse
 * the saved JSON files
 *
 * @return {Token[][]}
 */
export default async function parseEthereumLists(): Promise<Token[][]> {
  await fetchRepository(ETHEREUM_LISTS_REPO);

  const tokenLists: Token[][] = await parseEthereumListsTokenFiles()
    .then(resolveDeprecations)
    .then(partitionByUniqueness);

  return tokenLists;
}
