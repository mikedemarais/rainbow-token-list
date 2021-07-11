import OFFLINE_TOKEN_METADATA from './data/rainbow-token-list.json';
declare type TokenMetadata = typeof OFFLINE_TOKEN_METADATA;
/**
 * Get the raw Token List data.
 *
 * @param endpoint The endpoint from which to load the Token List.
 * @param offlineData The data to fallback to in case of network failure.
 * @returns The Token List dataset.
 */
export declare const loadFromEndpoint: <T>(endpoint: string, offlineData: T) => Promise<any>;
/**
 * Load the raw Token List endpoint, including timestamp and other metadata.
 *
 * @returns The raw data from the JSON endpoint.
 */
export declare const loadTokenMetadata: () => Promise<any>;
/**
 * Load the full Token List, including any manual tokens.
 *
 * @param offlineData The data to fallback to in case of network failure.
 * @returns The full Token List.
 */
export declare const loadTokenList: () => Promise<({
    address: string;
    decimals: number;
    name: string;
    symbol: string;
    uniqueId: string;
} | {
    color: string;
    isRainbowCurated: boolean;
    isVerified: boolean;
    shadowColor?: undefined;
    address: string;
    decimals: number;
    name: string;
    symbol: string;
    uniqueId: string;
} | {
    isVerified: boolean;
    color?: undefined;
    isRainbowCurated?: undefined;
    shadowColor?: undefined;
    address: string;
    decimals: number;
    name: string;
    symbol: string;
    uniqueId: string;
} | {
    color: string;
    isVerified: boolean;
    shadowColor: string;
    isRainbowCurated?: undefined;
    address: string;
    decimals: number;
    name: string;
    symbol: string;
    uniqueId: string;
} | {
    color: string;
    isVerified: boolean;
    isRainbowCurated?: undefined;
    shadowColor?: undefined;
    address: string;
    decimals: number;
    name: string;
    symbol: string;
    uniqueId: string;
} | {
    color: string;
    isRainbowCurated: boolean;
    isVerified: boolean;
    shadowColor: string;
    address: string;
    decimals: number;
    name: string;
    symbol: string;
    uniqueId: string;
} | {
    isRainbowCurated: boolean;
    isVerified: boolean;
    color?: undefined;
    shadowColor?: undefined;
    address: string;
    decimals: number;
    name: string;
    symbol: string;
    uniqueId: string;
} | {
    color: string;
    isRainbowCurated?: undefined;
    isVerified?: undefined;
    shadowColor?: undefined;
    address: string;
    decimals: number;
    name: string;
    symbol: string;
    uniqueId: string;
} | {
    color: string;
    shadowColor: string;
    isRainbowCurated?: undefined;
    isVerified?: undefined;
    address: string;
    decimals: number;
    name: string;
    symbol: string;
    uniqueId: string;
})[]>;
/**
 * Load the Token Overrides List.
 * @returns All token overrides.
 */
export declare const loadTokenOverrides: () => Promise<any>;
/**
 * Get the Token List from raw metadata.
 *
 * @param tokenData The raw Token List data to process.
 * @returns The Token List.
 */
export declare const tokenListFromData: (tokenData: TokenMetadata) => Promise<({
    address: string;
    decimals: number;
    name: string;
    symbol: string;
    uniqueId: string;
} | {
    color: string;
    isRainbowCurated: boolean;
    isVerified: boolean;
    shadowColor?: undefined;
    address: string;
    decimals: number;
    name: string;
    symbol: string;
    uniqueId: string;
} | {
    isVerified: boolean;
    color?: undefined;
    isRainbowCurated?: undefined;
    shadowColor?: undefined;
    address: string;
    decimals: number;
    name: string;
    symbol: string;
    uniqueId: string;
} | {
    color: string;
    isVerified: boolean;
    shadowColor: string;
    isRainbowCurated?: undefined;
    address: string;
    decimals: number;
    name: string;
    symbol: string;
    uniqueId: string;
} | {
    color: string;
    isVerified: boolean;
    isRainbowCurated?: undefined;
    shadowColor?: undefined;
    address: string;
    decimals: number;
    name: string;
    symbol: string;
    uniqueId: string;
} | {
    color: string;
    isRainbowCurated: boolean;
    isVerified: boolean;
    shadowColor: string;
    address: string;
    decimals: number;
    name: string;
    symbol: string;
    uniqueId: string;
} | {
    isRainbowCurated: boolean;
    isVerified: boolean;
    color?: undefined;
    shadowColor?: undefined;
    address: string;
    decimals: number;
    name: string;
    symbol: string;
    uniqueId: string;
} | {
    color: string;
    isRainbowCurated?: undefined;
    isVerified?: undefined;
    shadowColor?: undefined;
    address: string;
    decimals: number;
    name: string;
    symbol: string;
    uniqueId: string;
} | {
    color: string;
    shadowColor: string;
    isRainbowCurated?: undefined;
    isVerified?: undefined;
    address: string;
    decimals: number;
    name: string;
    symbol: string;
    uniqueId: string;
})[]>;
export {};
