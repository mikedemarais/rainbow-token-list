/**
 * @fileoverview
 * This file uses fs.readdir in a pure JS Git context, so it relies on
 * graceful-fs to prevent EMFILE errors in serverless environments.
 */
import { Token } from '../../../../src/constants';
/**
 * Partition tokens array into two categories: unique vs duplicates, according to
 * their token symbol
 *
 * @param {Token[]} tokens
 * @return {Token[][]}
 */
export declare const partitionByUniqueness: (tokens: Token[]) => Token[][];
/**
 * Finds deprecated tokens and replaces them with the data
 * for the latest version of the token
 *
 * @param {Token[]} tokens
 *
 * @return {Token[]}
 */
export declare function resolveDeprecations(tokens: Token[]): Token[];
/**
 * Load the token JSON files from directory, and then validate them
 * against our token schema
 *
 * @return {Token[]}
 */
export declare function parseEthereumListsTokenFiles(extractedAt: string): Promise<Token[]>;
/**
 * Fetch the latest commit from `ethereum-lists/tokens` repo and parse
 * the saved JSON files
 *
 * @return {Token[][]}
 */
export default function parseEthereumLists(): Promise<Token[][]>;
