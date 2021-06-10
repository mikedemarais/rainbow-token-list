import degit from 'degit';

/**
 * Fetch a Git repository and return the file system path of the folder containing the repository.
 *
 * @return {Promise<void>}
 */
export const fetchRepository = async (repoUrl: string, outputPath: string) => {
  const emitter = degit(repoUrl, {
    // caching can cause problems and should stay disabled.
    cache: false,
    // forcibly overwrite any existing files in the directory
    force: true,
  });

  try {
    return await emitter.clone(outputPath);
  } catch (error) {
    throw new Error(`Failed to fetch repo ${repoUrl}: ${error}`);
  }
};
