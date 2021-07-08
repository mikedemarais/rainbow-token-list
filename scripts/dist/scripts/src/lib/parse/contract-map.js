"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const path_1 = require("path");
const constants_1 = require("../../../../src/constants");
const fetch_repository_1 = require("../../utils/fetch-repository");
const parser_1 = require("./parser");
async function parseContractMap() {
    // fetch the latest commit from `eth-contract-metadata` repo and save it to disk
    const extractedAt = await fetch_repository_1.fetchRepository(constants_1.CONTRACT_MAP_REPO);
    // load contract map JSON file from directory
    const jsonFile = path_1.resolve(extractedAt, 'contract-map.json');
    const contractMap = await parser_1.parseJsonFile(jsonFile);
    return (Object.keys(contractMap)
        .map((address) => ({
        ...contractMap[address],
        address,
    }))
        // remove any unknown/undesirable keys from each token object.
        .map(token => lodash_1.pick(token, Object.keys(constants_1.RawContractMapTokenSchema.shape)))
        // remove any tokens from the array if they contain null values for the
        // keys that we care about.
        .filter(token => Object.values(token).some(lodash_1.isEmpty))
        .map(parser_1.validateTokenData));
}
exports.default = parseContractMap;
//# sourceMappingURL=contract-map.js.map