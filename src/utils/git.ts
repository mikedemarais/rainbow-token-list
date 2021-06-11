// import fs from 'graceful-fs';
// import http from 'isomorphic-git/http/node';
// import git from '/home/christian/PersonalProjects/isomorphic-git';
import path from 'path';
import { tmpdir } from 'os';

import degit from 'degit';
import { PRODUCTION } from '../constants';

/**
 * Fetch a Git repository and store it in tmpdir.
 *
 * @return {Promise<void>}
 */
export const fetchRepository = async (repoUrl: string) => {
  console.log({ repoUrl });
  const repoPieces = repoUrl.split('/');
  const ghRepo = repoPieces.slice(0, 2).join('/');
  const tempGitDir = path.join(tmpdir(), ghRepo);
  const url = `https://github.com/${ghRepo}`;
  console.log({ url, repoUrl, ghRepo });

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

  await emitter.clone(tempGitDir);
  console.log(`Fetched ${repoUrl}`);
};
