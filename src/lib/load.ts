import { map, toLower } from 'lodash';
import nodeFetch from 'node-fetch';

import {
  REMOTE_TOKEN_LIST_ENDPOINT,
  REMOTE_TOKEN_OVERRIDES_ENDPOINT,
} from '../constants';

// logger.log(OFFLINE_TOKEN_METADATA);

/**
 * Get the raw Token List data.
 *
 * @param endpoint The endpoint from which to load the Token List.
 * @param offlineData The data to fallback to in case of network failure.
 * @returns The Token List dataset.
 */
export const loadFromEndpoint = async <T>(
  endpoint: string,
  offlineData: T,
  fetch: Function = nodeFetch
) => {
  console.log('Making request to', endpoint);
  try {
    const result = await fetch(endpoint);
    console.log('REQUEST SUCCEEDED.');
    return await result.json();
  } catch (e) {
    console.log('REQUEST FAILED.', e);
    return offlineData;
  }
};

/**
 * Load the full Token List, including any manual tokens.
 *
 * @param offlineData The data to fallback to in case of network failure.
 * @returns The full Token List.
 */
export const loadTokenList = async <T>(
  offlineData: T,
  fetch: Function = nodeFetch
): Promise<T[]> => {
  const tokenData = loadFromEndpoint(
    REMOTE_TOKEN_LIST_ENDPOINT,
    offlineData,
    fetch
  );
  const tokens = await tokenListFromData(tokenData);
  return tokens;
};

/**
 * Load the Token Overrides List.
 * @returns All token overrides.
 */
export const loadTokenOverrides = async <T>(
  offlineData: T,
  fetch: Function = nodeFetch
): Promise<T> => {
  const overrides = loadFromEndpoint(
    REMOTE_TOKEN_OVERRIDES_ENDPOINT,
    offlineData,
    fetch
  );
  return overrides;
};

/**
 * Get the Token List from raw metadata.
 *
 * @param tokenData The raw Token List data to process.
 * @returns The Token List.
 */
export const tokenListFromData = async (tokenData: any) => {
  const loadedTokens = map(tokenData.tokens, (token: any) => {
    const { address: rawAddress, decimals, name, symbol, extensions } = token;
    const address = toLower(rawAddress);
    return {
      address,
      decimals,
      name,
      symbol,
      uniqueId: address,
      ...extensions,
    };
  });

  return loadedTokens;
};
