import pLimit from 'p-limit';
import { promises as fs } from 'graceful-fs';
import { resolve } from 'path';

export type FileMap<T = any> = (file: string) => Promise<T>;

interface MapDirArgs<T> {
  dir: string;
  fileMap: FileMap<T>;
  limit?: number;
}

export async function mapDir<T>({ dir, fileMap, limit = 10 }: MapDirArgs<T>) {
  /**
   * Run in a pool to prevent EMFILE errors in serverless context.
   */
  const pool = pLimit(limit);
  /**
   * Resolve dir and load files.
   */
  dir = resolve(dir);
  const files = await fs.readdir(dir);

  const resultPromises: (() => Promise<T>)[] = files.map(file => async () =>
    await fileMap(resolve(dir, file))
  );

  const results: T[] = await Promise.all(
    resultPromises.map(resultPromise => pool(async () => await resultPromise()))
  );

  return results;
}
