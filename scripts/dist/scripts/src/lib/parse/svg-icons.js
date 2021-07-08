"use strict";
/**
 * @fileoverview
 * This file uses fs.readdir in a pure JS Git context, so it relies on
 * graceful-fs to prevent EMFILE errors in serverless environments.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SVG_OVERRIDES_REPO = exports.SVG_ORIGINALS_REPO = void 0;
const tslib_1 = require("tslib");
const lodash_1 = require("lodash");
const get_svg_colors_1 = tslib_1.__importDefault(require("get-svg-colors"));
const path_1 = require("path");
const parser_1 = require("./parser");
const fetch_repository_1 = require("../../utils/fetch-repository");
const graceful_fs_1 = tslib_1.__importDefault(require("graceful-fs"));
const mapDir_1 = require("../../utils/mapDir");
const make_color_more_chill_1 = tslib_1.__importDefault(require("make-color-more-chill"));
exports.SVG_ORIGINALS_REPO = 'spothq/cryptocurrency-icons';
exports.SVG_OVERRIDES_REPO = 'mikedemarais/react-coin-icon/assets/overrides';
async function parseOriginalSVGIcons() {
    // fetch the latest commit from `spothq/cryptocurrency-icons` repo and save it to disk
    const extractedAt = await fetch_repository_1.fetchRepository(exports.SVG_ORIGINALS_REPO);
    // load svg manifest JSON file from directory
    const jsonFile = path_1.resolve(extractedAt, 'manifest.json');
    return parser_1.parseJsonFile(jsonFile);
}
async function parseOverrideSVGIcons() {
    const extractedAt = await fetch_repository_1.fetchRepository(exports.SVG_OVERRIDES_REPO);
    const fileMap = async (file) => {
        const svg = await graceful_fs_1.default.promises.readFile(file, 'utf8');
        // Attempt to get SVG's "color" by reading it's first "fill"
        // value (which is usually the icon's background).
        const fillColor = get_svg_colors_1.default(svg).fills[0];
        let svgToken = undefined;
        if (fillColor) {
            svgToken = {
                symbol: file.split('.')[0].toUpperCase(),
                color: make_color_more_chill_1.default(fillColor.hex().toLowerCase()),
            };
        }
        else {
            console.error(`Couldn't derive color from the "rainbow override" SVG file: \`${file}\``);
        }
        return svgToken;
    };
    const results = await mapDir_1.mapDir({
        dir: extractedAt,
        fileMap,
    });
    return lodash_1.compact(results);
}
async function parseSVGIconTokenFiles() {
    const originals = await parseOriginalSVGIcons();
    const overrides = await parseOverrideSVGIcons();
    return lodash_1.unionBy(originals, overrides, 'symbol');
}
exports.default = parseSVGIconTokenFiles;
//# sourceMappingURL=svg-icons.js.map