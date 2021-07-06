/**
 * @fileoverview
 * This file uses fs.readdir in a pure JS Git context, so it relies on
 * graceful-fs to prevent EMFILE errors in serverless environments.
 */
export declare type SvgToken = {
    color: string;
    name?: string;
    symbol: string;
};
export declare const SVG_ORIGINALS_REPO = "spothq/cryptocurrency-icons";
export declare const SVG_OVERRIDES_REPO = "mikedemarais/react-coin-icon/assets/overrides";
export default function parseSVGIconTokenFiles(): Promise<SvgToken[]>;
