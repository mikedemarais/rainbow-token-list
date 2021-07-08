"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const address_1 = require("@ethersproject/address");
const lodash_1 = require("lodash");
const load_1 = require("../../../../src/load");
async function parseOverrides() {
    const overrides = await load_1.loadTokenOverrides();
    // load svg manifest JSON file from directory
    return lodash_1.mapKeys(overrides, (...args) => {
        if (args[1] === 'eth')
            return args[1];
        return address_1.getAddress(args[1]);
    });
}
exports.default = parseOverrides;
//# sourceMappingURL=overrides.js.map