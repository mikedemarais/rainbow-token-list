"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenListFromData = exports.loadTokenOverrides = exports.loadTokenList = exports.loadFromEndpoint = void 0;
const tslib_1 = require("tslib");
const lodash_1 = require("lodash");
const rainbow_token_list_json_1 = tslib_1.__importDefault(require("./data/rainbow-token-list.json"));
const rainbow_overrides_1 = require("rainbow-overrides");
const constants_1 = require("./constants");
const node_fetch_1 = tslib_1.__importDefault(require("node-fetch"));
/**
 * Get the raw Token List data.
 *
 * @param endpoint The endpoint from which to load the Token List.
 * @param offlineData The data to fallback to in case of network failure.
 * @returns The Token List dataset.
 */
const loadFromEndpoint = async (endpoint, offlineData) => {
    console.log('Making request to', endpoint);
    try {
        const result = await node_fetch_1.default(endpoint);
        console.log('REQUEST SUCCEEDED.');
        return await result.json();
    }
    catch (e) {
        console.log('REQUEST FAILED.', e);
        return offlineData;
    }
};
exports.loadFromEndpoint = loadFromEndpoint;
/**
 * Load the full Token List, including any manual tokens.
 *
 * @param offlineData The data to fallback to in case of network failure.
 * @returns The full Token List.
 */
const loadTokenList = async () => {
    const tokenData = await exports.loadFromEndpoint(constants_1.REMOTE_TOKEN_LIST_ENDPOINT, rainbow_token_list_json_1.default);
    const tokens = await exports.tokenListFromData(tokenData);
    return tokens;
};
exports.loadTokenList = loadTokenList;
/**
 * Load the Token Overrides List.
 * @returns All token overrides.
 */
const loadTokenOverrides = async () => {
    const overrides = exports.loadFromEndpoint(constants_1.REMOTE_TOKEN_OVERRIDES_ENDPOINT, rainbow_overrides_1.OFFLINE_TOKEN_OVERRIDES);
    return overrides;
};
exports.loadTokenOverrides = loadTokenOverrides;
/**
 * Get the Token List from raw metadata.
 *
 * @param tokenData The raw Token List data to process.
 * @returns The Token List.
 */
const tokenListFromData = async (tokenData) => {
    const loadedTokens = lodash_1.map(tokenData.tokens, token => {
        const { address: rawAddress, decimals, name, symbol, extensions } = token;
        const address = lodash_1.toLower(rawAddress);
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
exports.tokenListFromData = tokenListFromData;
//# sourceMappingURL=load.js.map