"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deeplyTrimAllTokenStrings = exports.sortTokens = exports.validateTokenData = exports.parseJsonFile = void 0;
const tslib_1 = require("tslib");
const graceful_fs_1 = tslib_1.__importDefault(require("graceful-fs"));
const lodash_1 = require("lodash");
const constants_1 = require("../../../../src/constants");
const isError_1 = require("../../utils/isError");
/**
 * Reads and parses a JSON file. Throws an error if the file could not be read
 * or if the JSON is invalid.
 *
 * @param {string} file
 * @return {Promise<T>}
 * @template T
 */
const parseJsonFile = async (file) => {
    try {
        const json = await graceful_fs_1.default.promises.readFile(file, 'utf8');
        return JSON.parse(json);
    }
    catch (error) {
        throw new Error(`Failed to parse file ${file}: ${isError_1.formattedError(error)}`);
    }
};
exports.parseJsonFile = parseJsonFile;
/**
 * Validate raw token data, by checking if the required values are set and if
 * the decimals are larger than or equal to zero. This will strip any unknown
 * fields and rename the 'decimals' field to 'decimal' for compatibility.
 *
 * @param {RawEthereumListsToken} token
 * @return {boolean}
 */
const validateTokenData = (token) => {
    const normalizedTokenData = {
        ...lodash_1.pick(token, Object.keys(constants_1.RawEthereumListsTokenSchema.shape)),
        deprecation: lodash_1.pick(token.deprecation, Object.keys(constants_1.TokenDeprecationSchema.shape)),
        social: lodash_1.pick(token.social, Object.keys(constants_1.SocialSchema.shape)),
    };
    const validToken = constants_1.TokenSchema.parse(normalizedTokenData);
    const validSocial = constants_1.SocialSchema.parse(normalizedTokenData.social);
    return {
        ...validToken,
        social: validSocial,
    };
};
exports.validateTokenData = validateTokenData;
/**
 * Sort tokens alphabetically by symbol.
 *
 * @param {Token[]} tokens
 * @return {Token[]}
 */
const sortTokens = (tokens) => {
    return tokens.sort((a, b) => a.symbol.localeCompare(b.symbol));
};
exports.sortTokens = sortTokens;
function mapValuesDeep(v, callback) {
    return lodash_1.isPlainObject(v)
        ? lodash_1.mapValues(v, v => mapValuesDeep(v, callback))
        : callback(v);
}
/**
 * Recursively loop through an token's values and `trim()` any values which are
 * strings.
 *
 * @param {Token} token
 * @return {Token}
 */
const deeplyTrimAllTokenStrings = (token) => {
    return mapValuesDeep(token, (v) => (lodash_1.isString(v) ? v.trim() : v));
};
exports.deeplyTrimAllTokenStrings = deeplyTrimAllTokenStrings;
//# sourceMappingURL=parser.js.map