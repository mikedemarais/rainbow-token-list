import { map, toLower } from 'lodash';

import OFFLINE_TOKEN_METADATA from './data/rainbow-token-list.json';
import { OFFLINE_TOKEN_OVERRIDES } from 'rainbow-overrides';

import {
  REMOTE_TOKEN_LIST_ENDPOINT,
  REMOTE_TOKEN_OVERRIDES_ENDPOINT,
} from './constants';
import fetch from 'node-fetch';

type TokenMetadata = typeof OFFLINE_TOKEN_METADATA;

/**
 * Get the raw Token List data.
 *
 * @param endpoint The endpoint from which to load the Token List.
 * @param offlineData The data to fallback to in case of network failure.
 * @returns The Token List dataset.
 */
export const loadFromEndpoint = async <T>(endpoint: string, offlineData: T) => {
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
export const loadTokenList = async () => {
  const tokenData = await loadFromEndpoint(
    REMOTE_TOKEN_LIST_ENDPOINT,
    OFFLINE_TOKEN_METADATA
  );

  const tokens = await tokenListFromData(tokenData);
  return tokens;
};

/**
 * Load the Token Overrides List.
 * @returns All token overrides.
 */
export const loadTokenOverrides = async (): Promise<any> => {
  const overrides = loadFromEndpoint(
    REMOTE_TOKEN_OVERRIDES_ENDPOINT,
    OFFLINE_TOKEN_OVERRIDES
  );

  return overrides;
};

/**
 * Get the Token List from raw metadata.
 *
 * @param tokenData The raw Token List data to process.
 * @returns The Token List.
 */
export const tokenListFromData = async (tokenData: TokenMetadata) => {
  const loadedTokens = map(tokenData.tokens, (token) => {
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
