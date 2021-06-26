import mkdirp from 'mkdirp';
import fs from 'graceful-fs';
import { dirname, resolve } from 'path';
import { formattedError, isError } from '../utils/isError';
import { build } from './build';

/**
 * Recursively creates the output folder(s) if they do not exist yet.
 *
 * @param {string} location The output file or folder.
 * @return {Promise<void>}
 */
export const createOutputFolder = async (location: string): Promise<void> => {
  const path = dirname(location);
  try {
    await fs.promises.access(path);
  } catch (error) {
    if (isError(error)) {
      if (error.code !== 'ENOENT') {
        throw new Error(
          `Failed to create output folder: ${formattedError(error)}`
        );
      }

      mkdirp.sync(path);
    }
  }
};

/**
 * Write the Rainbow Token List JSON file to process.cwd().
 *
 * @param {Token[]} tokens The tokens to write.
 * @param {string} location The path to the output file.
 *
 * @return {Promise<void>}
 */
export const writeToDisk = async (
  tokens: any,
  location: string
): Promise<void> => {
  const json = JSON.stringify(tokens, null, 2);
  const outputLocation = resolve(location);
  await createOutputFolder(outputLocation);
  return fs.promises.writeFile(outputLocation, json, 'utf8');
};

export async function write() {
  const tokens = await build();
  await writeToDisk(
    {
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
    },
    resolve(process.cwd(), 'rainbow-token-list.json')
  );
}
