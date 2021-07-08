"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenListStoreRecord = exports.TokenListStore = exports.reduceArrayToObject = void 0;
const tslib_1 = require("tslib");
const node_fetch_1 = tslib_1.__importDefault(require("node-fetch"));
const zod_1 = require("zod");
const constants_1 = require("../../../../src/constants");
function reduceArrayToObject(array) {
    return array.reduce((item, culm) => Object.assign(culm, item), {});
}
exports.reduceArrayToObject = reduceArrayToObject;
exports.TokenListStore = zod_1.z.object({
    tags: zod_1.z
        .any()
        .array()
        .optional(),
    tokens: zod_1.z
        .any()
        .array()
        .optional(),
});
exports.TokenListStoreRecord = zod_1.z.record(exports.TokenListStore);
const omitTokenWithTag = (tokens, tag) => tokens.filter(({ tags = [] }) => !tags.includes(tag));
const pickTokenWithTag = (tokens, tag) => tokens.filter(({ tags = [] }) => tags.includes(tag));
const { aave, roll } = constants_1.TokenListEnumSchema.enum;
async function parseTokenLists() {
    const listsArray = await Promise.all(constants_1.TokenListEnumSchema.options.map(async (list) => {
        return new Promise(async (resolve, reject) => 
        // fetch the TokenList from remote uri
        node_fetch_1.default(constants_1.TOKEN_LISTS[list])
            .then(res => res.json())
            .then(({ tags, tokens }) => resolve({ [list]: { tags, tokens } }))
            .catch(reject));
    }));
    return reduceArrayToObject(listsArray.map((list) => {
        const listName = Object.keys(list)[0];
        const newList = { ...list };
        if (listName === roll) {
            newList[roll].tokens = omitTokenWithTag(newList[roll].tokens, 'bases');
        }
        if (listName === aave) {
            newList[aave].tokens = [
                ...pickTokenWithTag(newList[aave].tokens, 'atokenv1'),
                ...pickTokenWithTag(newList[aave].tokens, 'atokenv2'),
            ];
        }
        return newList;
    }));
}
exports.default = parseTokenLists;
//# sourceMappingURL=token-lists.js.map