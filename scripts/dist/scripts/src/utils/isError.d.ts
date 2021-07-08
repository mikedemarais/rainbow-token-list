interface Error {
    code: any;
    message: string;
}
export declare const isError: (error: any) => error is Error;
export declare const formattedError: (error: any) => any;
export {};
