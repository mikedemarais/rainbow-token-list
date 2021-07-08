"use strict";
/**
 * @fileoverview
 * This file uses fs.readdir in a pure JS Git context, so it relies on
 * graceful-fs to prevent EMFILE errors in serverless environments.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseEthereumListsTokenFiles = exports.resolveDeprecations = exports.partitionByUniqueness = void 0;
const lodash_1 = require("lodash");
const parser_1 = require("./parser");
const constants_1 = require("../../../../src/constants");
const fetch_repository_1 = require("../../utils/fetch-repository");
const mapDir_1 = require("../../utils/mapDir");
/**
 * Partition tokens array into two categories: unique vs duplicates, according to
 * their token symbol
 *
 * @param {Token[]} tokens
 * @return {Token[][]}
 */
const partitionByUniqueness = (tokens) => {
    const [uniqueTokens, duplicateTokens] = lodash_1.partition(tokens, token => {
        const dups = lodash_1.filter(tokens, ['symbol', token.symbol]);
        return dups.length === 1;
    });
    return [uniqueTokens, duplicateTokens];
};
exports.partitionByUniqueness = partitionByUniqueness;
/**
 * Finds deprecated tokens and replaces them with the data
 * for the latest version of the token
 *
 * @param {Token[]} tokens
 *
 * @return {Token[]}
 */
function resolveDeprecations(tokens) {
    return tokens.map(({ deprecation, ...token }) => {
        return !deprecation?.new_address
            ? token
            : tokens.find(lodash_1.matchesProperty('address', deprecation.new_address)) ||
                token;
    });
}
exports.resolveDeprecations = resolveDeprecations;
/**
 * Load the token JSON files from directory, and then validate them
 * against our token schema
 *
 * @return {Token[]}
 */
async function parseEthereumListsTokenFiles(extractedAt) {
    const fileMap = async (file) => {
        const tokenData = await parser_1.parseJsonFile(file);
        return parser_1.validateTokenData(tokenData);
    };
    const results = await mapDir_1.mapDir({ dir: extractedAt, fileMap });
    return results;
}
exports.parseEthereumListsTokenFiles = parseEthereumListsTokenFiles;
/**
 * Fetch the latest commit from `ethereum-lists/tokens` repo and parse
 * the saved JSON files
 *
 * @return {Token[][]}
 */
async function parseEthereumLists() {
    const extractedAt = await fetch_repository_1.fetchRepository(constants_1.ETHEREUM_LISTS_REPO);
    const tokenLists = await parseEthereumListsTokenFiles(extractedAt)
        .then(resolveDeprecations)
        .then(exports.partitionByUniqueness);
    return tokenLists;
}
exports.default = parseEthereumLists;
//# sourceMappingURL=ethereum-lists.js.map