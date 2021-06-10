import fs from 'graceful-fs';
import http from 'isomorphic-git/http/node';
import git from 'isomorphic-git';
import path from 'path';

import { tmpdir } from 'os';
import { existsSync } from 'fs';

// import degit from 'degit';

/**
 * Fetch a Git repository and store it in tmpdir.
 *
 * @return {Promise<void>}
 */
export const fetchRepository = async (repoUrl: string) => {
  const repoPieces = repoUrl.split('/');
  const ghRepo = repoPieces.slice(0, 2).join('/');
  const tempGitDir = path.join(tmpdir(), ghRepo);
  const url = `https://github.com/${ghRepo}`;
  console.log({ url, repoUrl, ghRepo });

  if (existsSync(tempGitDir)) {
    console.log(`${tempGitDir} already exists. Deleting.`);
    fs.rmdirSync(tempGitDir, { recursive: true });
  }

  await git.clone({
    depth: 1,
    singleBranch: true,
    fs,
    http,
    dir: tempGitDir,
    url,
  });

  console.log(`Fetched ${repoUrl}`);
};
