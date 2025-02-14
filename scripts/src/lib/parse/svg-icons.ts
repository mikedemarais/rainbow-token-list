/**
 * @fileoverview
 * This file uses fs.readdir in a pure JS Git context, so it relies on
 * graceful-fs to prevent EMFILE errors in serverless environments.
 */

import { compact, unionBy } from 'lodash';
import getSVGColors from 'get-svg-colors';

import { resolve } from 'path';
import { parseJsonFile } from './parser';

import { fetchRepository } from '../../utils/fetch-repository';
import fs from 'graceful-fs';
import { FileMap, mapDir } from '../../utils/mapDir';
import makeColorMoreChill from 'make-color-more-chill';

export type SvgToken = {
  color: string;
  name?: string;
  symbol: string;
};

export const SVG_ORIGINALS_REPO = 'spothq/cryptocurrency-icons';
export const SVG_OVERRIDES_REPO =
  'mikedemarais/react-coin-icon/assets/overrides';

async function parseOriginalSVGIcons() {
  // fetch the latest commit from `spothq/cryptocurrency-icons` repo and save it to disk
  const extractedAt = await fetchRepository(SVG_ORIGINALS_REPO);
  // load svg manifest JSON file from directory
  const jsonFile = resolve(extractedAt, 'manifest.json');
  return parseJsonFile<SvgToken[]>(jsonFile);
}

async function parseOverrideSVGIcons() {
  const extractedAt = await fetchRepository(SVG_OVERRIDES_REPO);
  const fileMap: FileMap = async file => {
    const svg = await fs.promises.readFile(file, 'utf8');

    // Attempt to get SVG's "color" by reading it's first "fill"
    // value (which is usually the icon's background).
    const fillColor = getSVGColors(svg).fills[0];

    let svgToken = undefined;
    if (fillColor) {
      svgToken = {
        symbol: file.split('.')[0].toUpperCase(),
        color: makeColorMoreChill(fillColor.hex().toLowerCase()),
      };
    } else {
      console.error(
        `Couldn't derive color from the "rainbow override" SVG file: \`${file}\``
      );
    }

    return svgToken;
  };

  const results = await mapDir({
    dir: extractedAt,
    fileMap,
  });

  return compact(results);
}

export default async function parseSVGIconTokenFiles(): Promise<SvgToken[]> {
  const originals = await parseOriginalSVGIcons();
  const overrides = await parseOverrideSVGIcons();

  return unionBy(originals, overrides, 'symbol');
}
