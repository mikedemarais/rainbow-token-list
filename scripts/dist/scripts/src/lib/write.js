"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.write = exports.writeToDisk = exports.createOutputFolder = void 0;
const tslib_1 = require("tslib");
const mkdirp_1 = tslib_1.__importDefault(require("mkdirp"));
const graceful_fs_1 = tslib_1.__importDefault(require("graceful-fs"));
const path_1 = require("path");
const isError_1 = require("../utils/isError");
const build_1 = require("./build");
/**
 * Recursively creates the output folder(s) if they do not exist yet.
 *
 * @param {string} location The output file or folder.
 * @return {Promise<void>}
 */
const createOutputFolder = async (location) => {
    const path = path_1.dirname(location);
    try {
        await graceful_fs_1.default.promises.access(path);
    }
    catch (error) {
        if (isError_1.isError(error)) {
            if (error.code !== 'ENOENT') {
                throw new Error(`Failed to create output folder: ${isError_1.formattedError(error)}`);
            }
            mkdirp_1.default.sync(path);
        }
    }
};
exports.createOutputFolder = createOutputFolder;
/**
 * Write the Rainbow Token List JSON file to process.cwd().
 *
 * @param {Token[]} tokens The tokens to write.
 * @param {string} location The path to the output file.
 *
 * @return {Promise<void>}
 */
const writeToDisk = async (tokens, location) => {
    const json = JSON.stringify(tokens, null, 2);
    const outputLocation = path_1.resolve(location);
    await exports.createOutputFolder(outputLocation);
    console.log('Writing to', outputLocation);
    return graceful_fs_1.default.promises.writeFile(outputLocation, json, 'utf8');
};
exports.writeToDisk = writeToDisk;
async function write() {
    const tokens = await build_1.build();
    await exports.writeToDisk({
        name: 'Rainbow Token List',
        timestamp: new Date().toISOString(),
        logoURI: 'https://avatars0.githubusercontent.com/u/48327834?s=200&v=4',
        version: {
            major: 1,
            minor: 2,
            patch: 1,
        },
        keywords: ['rainbow'],
        tokens,
    }, path_1.resolve(process.cwd(), 'src/data/rainbow-token-list.json'));
}
exports.write = write;
//# sourceMappingURL=write.js.map