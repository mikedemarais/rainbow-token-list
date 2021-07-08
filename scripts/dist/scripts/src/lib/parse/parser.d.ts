import { RawEthereumListsToken, Token } from '../../../../src/constants';
/**
 * Reads and parses a JSON file. Throws an error if the file could not be read
 * or if the JSON is invalid.
 *
 * @param {string} file
 * @return {Promise<T>}
 * @template T
 */
export declare const parseJsonFile: <T>(file: string) => Promise<T>;
/**
 * Validate raw token data, by checking if the required values are set and if
 * the decimals are larger than or equal to zero. This will strip any unknown
 * fields and rename the 'decimals' field to 'decimal' for compatibility.
 *
 * @param {RawEthereumListsToken} token
 * @return {boolean}
 */
export declare const validateTokenData: (token: RawEthereumListsToken) => Token;
/**
 * Sort tokens alphabetically by symbol.
 *
 * @param {Token[]} tokens
 * @return {Token[]}
 */
export declare const sortTokens: (tokens: Token[]) => Token[];
/**
 * Recursively loop through an token's values and `trim()` any values which are
 * strings.
 *
 * @param {Token} token
 * @return {Token}
 */
export declare const deeplyTrimAllTokenStrings: (token: Token) => Token;
