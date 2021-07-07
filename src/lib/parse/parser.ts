import fs from 'graceful-fs';
import { isPlainObject, isString, mapValues, pick } from 'lodash-es';
import {
  RawEthereumListsToken,
  RawEthereumListsTokenSchema,
  SocialSchema,
  Token,
  TokenSchema,
  TokenDeprecationSchema,
} from '../../constants';
import { formattedError } from '../../utils/isError';

/**
 * Reads and parses a JSON file. Throws an error if the file could not be read
 * or if the JSON is invalid.
 *
 * @param {string} file
 * @return {Promise<T>}
 * @template T
 */
export const parseJsonFile = async <T>(file: string): Promise<T> => {
  try {
    const json = await fs.promises.readFile(file, 'utf8');
    return JSON.parse(json);
  } catch (error) {
    throw new Error(`Failed to parse file ${file}: ${formattedError(error)}`);
  }
};

/**
 * Validate raw token data, by checking if the required values are set and if
 * the decimals are larger than or equal to zero. This will strip any unknown
 * fields and rename the 'decimals' field to 'decimal' for compatibility.
 *
 * @param {RawEthereumListsToken} token
 * @return {boolean}
 */
export const validateTokenData = (token: RawEthereumListsToken): Token => {
  const normalizedTokenData = {
    ...pick(token, Object.keys(RawEthereumListsTokenSchema.shape)),
    deprecation: pick(
      token.deprecation,
      Object.keys(TokenDeprecationSchema.shape)
    ),
    social: pick(token.social, Object.keys(SocialSchema.shape)),
  };

  const validToken = TokenSchema.parse(normalizedTokenData);
  const validSocial = SocialSchema.parse(normalizedTokenData.social);

  return {
    ...validToken,
    social: validSocial,
  } as Token;
};

/**
 * Sort tokens alphabetically by symbol.
 *
 * @param {Token[]} tokens
 * @return {Token[]}
 */
export const sortTokens = (tokens: Token[]): Token[] => {
  return tokens.sort((a, b) => a.symbol.localeCompare(b.symbol));
};

function mapValuesDeep(v: any, callback: any): any {
  return isPlainObject(v)
    ? mapValues(v, v => mapValuesDeep(v, callback))
    : callback(v);
}

/**
 * Recursively loop through an token's values and `trim()` any values which are
 * strings.
 *
 * @param {Token} token
 * @return {Token}
 */
export const deeplyTrimAllTokenStrings = (token: Token): Token => {
  return mapValuesDeep(token, (v: any) => (isString(v) ? v.trim() : v));
};
