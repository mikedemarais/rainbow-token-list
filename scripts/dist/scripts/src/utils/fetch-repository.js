"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchRepository = void 0;
const tslib_1 = require("tslib");
const degit_1 = tslib_1.__importDefault(require("degit"));
const os_1 = require("os");
const path_1 = require("path");
const constants_1 = require("../../../src/constants");
/**
 * Fetch a Git repository and store it in tmpdir.
 *
 * @return {Promise<void>}
 */
const fetchRepository = async (repoUrl) => {
    const tmp = os_1.tmpdir();
    const emitter = degit_1.default(repoUrl, {
        // cache can cause problems, so disable
        cache: false,
        // overwrite existing files
        force: true,
        // use verbose mode when developing
        verbose: !constants_1.PRODUCTION,
    });
    if (!constants_1.PRODUCTION) {
        emitter.on('info', info => console.log(info.message));
    }
    const userRepo = repoUrl
        .split('/')
        .slice(0, 2)
        .join('/');
    const extractedAt = path_1.resolve(tmp, userRepo);
    console.log(`Fetching ${repoUrl}`);
    await emitter.clone(extractedAt);
    console.log('Success.');
    return extractedAt;
};
exports.fetchRepository = fetchRepository;
//# sourceMappingURL=fetch-repository.js.map