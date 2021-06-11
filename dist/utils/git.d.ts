/**
 * Fetch a Git repository and store it in tmpdir.
 *
 * @return {Promise<void>}
 */
export declare const fetchRepository: (repoUrl: string) => Promise<string>;
