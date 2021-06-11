import degit from 'degit';
import { tmpdir } from 'os';
import { resolve } from 'path';

import { PRODUCTION } from '../constants';

/**
 * Fetch a Git repository and store it in tmpdir.
 *
 * @return {Promise<void>}
 */
export const fetchRepository = async (repoUrl: string) => {
  const tmp = tmpdir();
  const emitter = degit(repoUrl, {
    // cache can cause problems, so disable
    cache: false,
    // overwrite existing files
    force: true,
    // use verbose mode when developing
    verbose: !PRODUCTION,
  });

  if (!PRODUCTION) {
    emitter.on('info', info => console.log(info.message));
  }

  const userRepo = repoUrl
    .split('/')
    .slice(0, 2)
    .join('/');
  const extractedAt = resolve(tmp, userRepo);

  console.log(`Fetching ${repoUrl}`);
  await emitter.clone(extractedAt);
  console.log('Success.');

  return extractedAt;
};
