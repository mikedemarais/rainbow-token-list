export declare type FileMap<T = any> = (file: string) => Promise<T>;
interface MapDirArgs<T> {
    dir: string;
    fileMap: FileMap<T>;
    limit?: number;
}
export declare function mapDir<T>({ dir, fileMap, limit }: MapDirArgs<T>): Promise<T[]>;
export {};
