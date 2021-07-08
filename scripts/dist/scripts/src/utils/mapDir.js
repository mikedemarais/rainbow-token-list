"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapDir = void 0;
const tslib_1 = require("tslib");
const p_limit_1 = tslib_1.__importDefault(require("p-limit"));
const graceful_fs_1 = tslib_1.__importDefault(require("graceful-fs"));
const path_1 = require("path");
async function mapDir({ dir, fileMap, limit = 10 }) {
    /**
     * Run in a pool to prevent EMFILE errors in serverless context.
     */
    const pool = p_limit_1.default(limit);
    /**
     * Resolve dir and load files.
     */
    dir = path_1.resolve(dir);
    const files = await graceful_fs_1.default.promises.readdir(dir);
    const resultPromises = files.map(file => async () => await fileMap(path_1.resolve(dir, file)));
    const results = await Promise.all(resultPromises.map(resultPromise => pool(async () => await resultPromise())));
    return results;
}
exports.mapDir = mapDir;
//# sourceMappingURL=mapDir.js.map