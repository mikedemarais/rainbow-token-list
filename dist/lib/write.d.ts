/**
 * Recursively creates the output folder(s) if they do not exist yet.
 *
 * @param {string} location The output file or folder.
 * @return {Promise<void>}
 */
export declare const createOutputFolder: (location: string) => Promise<void>;
/**
 * Write the Rainbow Token List JSON file to process.cwd().
 *
 * @param {Token[]} tokens The tokens to write.
 * @param {string} location The path to the output file.
 *
 * @return {Promise<void>}
 */
export declare const writeToDisk: (tokens: any, location: string) => Promise<void>;
export declare function write(): Promise<void>;
