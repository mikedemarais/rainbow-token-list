import { z } from 'zod';
export declare function reduceArrayToObject(array: any[]): any;
export declare const TokenListStore: z.ZodObject<{
    tags: z.ZodOptional<z.ZodArray<z.ZodAny>>;
    tokens: z.ZodOptional<z.ZodArray<z.ZodAny>>;
}, "strip", z.ZodTypeAny, {
    tags?: any[] | undefined;
    tokens?: any[] | undefined;
}, {
    tags?: any[] | undefined;
    tokens?: any[] | undefined;
}>;
export declare type TokenListStoreType = z.infer<typeof TokenListStore>;
export declare const TokenListStoreRecord: z.ZodRecord<z.ZodObject<{
    tags: z.ZodOptional<z.ZodArray<z.ZodAny>>;
    tokens: z.ZodOptional<z.ZodArray<z.ZodAny>>;
}, "strip", z.ZodTypeAny, {
    tags?: any[] | undefined;
    tokens?: any[] | undefined;
}, {
    tags?: any[] | undefined;
    tokens?: any[] | undefined;
}>>;
export declare type TokenListStoreRecordType = z.infer<typeof TokenListStoreRecord>;
export default function parseTokenLists(): Promise<any>;
