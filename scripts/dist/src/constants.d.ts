import { z } from 'zod';
export declare const PRODUCTION: boolean;
export declare const CONTRACT_MAP_REPO = "metamask/eth-contract-metadata";
export declare const ETHEREUM_LISTS_REPO = "ethereum-lists/tokens/tokens/eth";
export declare const REMOTE_TOKEN_LIST_ENDPOINT = "https://raw.githubusercontent.com/ctjlewis/rainbow-token-list/service-compatibility/src/data/rainbow-token-list.json";
export declare const REMOTE_TOKEN_OVERRIDES_ENDPOINT = "https://raw.githubusercontent.com/ctjlewis/rainbow-overrides/master/src/data/rainbow-overrides.json";
export declare const TokenListItemSchema: z.ZodString;
export declare type TokenListItem = z.infer<typeof TokenListItemSchema>;
export declare const TokenListTypeSchema: z.ZodRecord<z.ZodString>;
export declare type TokenListType = z.infer<typeof TokenListTypeSchema>;
export declare const TOKEN_LISTS: TokenListType;
export declare const TokenListEnumSchema: z.ZodEnum<["aave", "coingecko", "dharma", "kleros", "roll", "synthetix", "wrapped"]>;
export declare type TokenListEnum = z.infer<typeof TokenListEnumSchema>;
export declare const SocialSchema: z.ZodObject<{
    blog: z.ZodOptional<z.ZodString>;
    chat: z.ZodOptional<z.ZodString>;
    discord: z.ZodOptional<z.ZodString>;
    facebook: z.ZodOptional<z.ZodString>;
    forum: z.ZodOptional<z.ZodString>;
    github: z.ZodOptional<z.ZodString>;
    gitter: z.ZodOptional<z.ZodString>;
    instagram: z.ZodOptional<z.ZodString>;
    linkedin: z.ZodOptional<z.ZodString>;
    medium: z.ZodOptional<z.ZodString>;
    reddit: z.ZodOptional<z.ZodString>;
    slack: z.ZodOptional<z.ZodString>;
    telegram: z.ZodOptional<z.ZodString>;
    twitter: z.ZodOptional<z.ZodString>;
    youtube: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    blog?: string | undefined;
    chat?: string | undefined;
    discord?: string | undefined;
    facebook?: string | undefined;
    forum?: string | undefined;
    github?: string | undefined;
    gitter?: string | undefined;
    instagram?: string | undefined;
    linkedin?: string | undefined;
    medium?: string | undefined;
    reddit?: string | undefined;
    slack?: string | undefined;
    telegram?: string | undefined;
    twitter?: string | undefined;
    youtube?: string | undefined;
}, {
    blog?: string | undefined;
    chat?: string | undefined;
    discord?: string | undefined;
    facebook?: string | undefined;
    forum?: string | undefined;
    github?: string | undefined;
    gitter?: string | undefined;
    instagram?: string | undefined;
    linkedin?: string | undefined;
    medium?: string | undefined;
    reddit?: string | undefined;
    slack?: string | undefined;
    telegram?: string | undefined;
    twitter?: string | undefined;
    youtube?: string | undefined;
}>;
export declare const TokenDeprecationSchema: z.ZodObject<{
    new_address: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    new_address?: string | undefined;
}, {
    new_address?: string | undefined;
}>;
export declare const TokenExtensionsSchema: z.ZodObject<{
    color: z.ZodOptional<z.ZodString>;
    isRainbowCurated: z.ZodOptional<z.ZodBoolean>;
    isVerified: z.ZodOptional<z.ZodBoolean>;
    shadowColor: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    color?: string | undefined;
    isRainbowCurated?: boolean | undefined;
    isVerified?: boolean | undefined;
    shadowColor?: string | undefined;
}, {
    color?: string | undefined;
    isRainbowCurated?: boolean | undefined;
    isVerified?: boolean | undefined;
    shadowColor?: string | undefined;
}>;
export declare type TokenExtensionsType = z.infer<typeof TokenExtensionsSchema>;
export declare const TokenSchema: z.ZodObject<{
    address: z.ZodString;
    chainId: z.ZodOptional<z.ZodNumber>;
    decimals: z.ZodNumber;
    deprecation: z.ZodOptional<z.ZodObject<{
        new_address: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        new_address?: string | undefined;
    }, {
        new_address?: string | undefined;
    }>>;
    extensions: z.ZodOptional<z.ZodObject<{
        color: z.ZodOptional<z.ZodString>;
        isRainbowCurated: z.ZodOptional<z.ZodBoolean>;
        isVerified: z.ZodOptional<z.ZodBoolean>;
        shadowColor: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        color?: string | undefined;
        isRainbowCurated?: boolean | undefined;
        isVerified?: boolean | undefined;
        shadowColor?: string | undefined;
    }, {
        color?: string | undefined;
        isRainbowCurated?: boolean | undefined;
        isVerified?: boolean | undefined;
        shadowColor?: string | undefined;
    }>>;
    name: z.ZodString;
    social: z.ZodOptional<z.ZodObject<{
        blog: z.ZodOptional<z.ZodString>;
        chat: z.ZodOptional<z.ZodString>;
        discord: z.ZodOptional<z.ZodString>;
        facebook: z.ZodOptional<z.ZodString>;
        forum: z.ZodOptional<z.ZodString>;
        github: z.ZodOptional<z.ZodString>;
        gitter: z.ZodOptional<z.ZodString>;
        instagram: z.ZodOptional<z.ZodString>;
        linkedin: z.ZodOptional<z.ZodString>;
        medium: z.ZodOptional<z.ZodString>;
        reddit: z.ZodOptional<z.ZodString>;
        slack: z.ZodOptional<z.ZodString>;
        telegram: z.ZodOptional<z.ZodString>;
        twitter: z.ZodOptional<z.ZodString>;
        youtube: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        blog?: string | undefined;
        chat?: string | undefined;
        discord?: string | undefined;
        facebook?: string | undefined;
        forum?: string | undefined;
        github?: string | undefined;
        gitter?: string | undefined;
        instagram?: string | undefined;
        linkedin?: string | undefined;
        medium?: string | undefined;
        reddit?: string | undefined;
        slack?: string | undefined;
        telegram?: string | undefined;
        twitter?: string | undefined;
        youtube?: string | undefined;
    }, {
        blog?: string | undefined;
        chat?: string | undefined;
        discord?: string | undefined;
        facebook?: string | undefined;
        forum?: string | undefined;
        github?: string | undefined;
        gitter?: string | undefined;
        instagram?: string | undefined;
        linkedin?: string | undefined;
        medium?: string | undefined;
        reddit?: string | undefined;
        slack?: string | undefined;
        telegram?: string | undefined;
        twitter?: string | undefined;
        youtube?: string | undefined;
    }>>;
    symbol: z.ZodString;
    website: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    chainId?: number | undefined;
    deprecation?: {
        new_address?: string | undefined;
    } | undefined;
    extensions?: {
        color?: string | undefined;
        isRainbowCurated?: boolean | undefined;
        isVerified?: boolean | undefined;
        shadowColor?: string | undefined;
    } | undefined;
    social?: {
        blog?: string | undefined;
        chat?: string | undefined;
        discord?: string | undefined;
        facebook?: string | undefined;
        forum?: string | undefined;
        github?: string | undefined;
        gitter?: string | undefined;
        instagram?: string | undefined;
        linkedin?: string | undefined;
        medium?: string | undefined;
        reddit?: string | undefined;
        slack?: string | undefined;
        telegram?: string | undefined;
        twitter?: string | undefined;
        youtube?: string | undefined;
    } | undefined;
    website?: string | undefined;
    symbol: string;
    address: string;
    decimals: number;
    name: string;
}, {
    chainId?: number | undefined;
    deprecation?: {
        new_address?: string | undefined;
    } | undefined;
    extensions?: {
        color?: string | undefined;
        isRainbowCurated?: boolean | undefined;
        isVerified?: boolean | undefined;
        shadowColor?: string | undefined;
    } | undefined;
    social?: {
        blog?: string | undefined;
        chat?: string | undefined;
        discord?: string | undefined;
        facebook?: string | undefined;
        forum?: string | undefined;
        github?: string | undefined;
        gitter?: string | undefined;
        instagram?: string | undefined;
        linkedin?: string | undefined;
        medium?: string | undefined;
        reddit?: string | undefined;
        slack?: string | undefined;
        telegram?: string | undefined;
        twitter?: string | undefined;
        youtube?: string | undefined;
    } | undefined;
    website?: string | undefined;
    symbol: string;
    address: string;
    decimals: number;
    name: string;
}>;
/**
 * Raw token data that is loaded from the JSON files.
 */
export declare const RawContractMapTokenSchema: z.ZodObject<{
    address: z.ZodString;
    decimals: z.ZodUnion<[z.ZodString, z.ZodNumber]>;
    name: z.ZodString;
    symbol: z.ZodString;
}, "strip", z.ZodTypeAny, {
    symbol: string;
    address: string;
    decimals: string | number;
    name: string;
}, {
    symbol: string;
    address: string;
    decimals: string | number;
    name: string;
}>;
/**
 * Raw token data that is loaded from the JSON files.
 */
export declare const RawEthereumListsTokenSchema: z.ZodObject<{
    address: z.ZodOptional<z.ZodString>;
    decimals: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    deprecation: z.ZodOptional<z.ZodObject<{
        new_address: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        new_address?: string | undefined;
    }, {
        new_address?: string | undefined;
    }>>;
    name: z.ZodOptional<z.ZodString>;
    social: z.ZodOptional<z.ZodObject<{
        blog: z.ZodOptional<z.ZodString>;
        chat: z.ZodOptional<z.ZodString>;
        discord: z.ZodOptional<z.ZodString>;
        facebook: z.ZodOptional<z.ZodString>;
        forum: z.ZodOptional<z.ZodString>;
        github: z.ZodOptional<z.ZodString>;
        gitter: z.ZodOptional<z.ZodString>;
        instagram: z.ZodOptional<z.ZodString>;
        linkedin: z.ZodOptional<z.ZodString>;
        medium: z.ZodOptional<z.ZodString>;
        reddit: z.ZodOptional<z.ZodString>;
        slack: z.ZodOptional<z.ZodString>;
        telegram: z.ZodOptional<z.ZodString>;
        twitter: z.ZodOptional<z.ZodString>;
        youtube: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        blog?: string | undefined;
        chat?: string | undefined;
        discord?: string | undefined;
        facebook?: string | undefined;
        forum?: string | undefined;
        github?: string | undefined;
        gitter?: string | undefined;
        instagram?: string | undefined;
        linkedin?: string | undefined;
        medium?: string | undefined;
        reddit?: string | undefined;
        slack?: string | undefined;
        telegram?: string | undefined;
        twitter?: string | undefined;
        youtube?: string | undefined;
    }, {
        blog?: string | undefined;
        chat?: string | undefined;
        discord?: string | undefined;
        facebook?: string | undefined;
        forum?: string | undefined;
        github?: string | undefined;
        gitter?: string | undefined;
        instagram?: string | undefined;
        linkedin?: string | undefined;
        medium?: string | undefined;
        reddit?: string | undefined;
        slack?: string | undefined;
        telegram?: string | undefined;
        twitter?: string | undefined;
        youtube?: string | undefined;
    }>>;
    symbol: z.ZodOptional<z.ZodString>;
    website: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    symbol?: string | undefined;
    address?: string | undefined;
    decimals?: string | number | undefined;
    deprecation?: {
        new_address?: string | undefined;
    } | undefined;
    name?: string | undefined;
    social?: {
        blog?: string | undefined;
        chat?: string | undefined;
        discord?: string | undefined;
        facebook?: string | undefined;
        forum?: string | undefined;
        github?: string | undefined;
        gitter?: string | undefined;
        instagram?: string | undefined;
        linkedin?: string | undefined;
        medium?: string | undefined;
        reddit?: string | undefined;
        slack?: string | undefined;
        telegram?: string | undefined;
        twitter?: string | undefined;
        youtube?: string | undefined;
    } | undefined;
    website?: string | undefined;
}, {
    symbol?: string | undefined;
    address?: string | undefined;
    decimals?: string | number | undefined;
    deprecation?: {
        new_address?: string | undefined;
    } | undefined;
    name?: string | undefined;
    social?: {
        blog?: string | undefined;
        chat?: string | undefined;
        discord?: string | undefined;
        facebook?: string | undefined;
        forum?: string | undefined;
        github?: string | undefined;
        gitter?: string | undefined;
        instagram?: string | undefined;
        linkedin?: string | undefined;
        medium?: string | undefined;
        reddit?: string | undefined;
        slack?: string | undefined;
        telegram?: string | undefined;
        twitter?: string | undefined;
        youtube?: string | undefined;
    } | undefined;
    website?: string | undefined;
}>;
export declare type RawContractMapToken = z.infer<typeof RawContractMapTokenSchema>;
export declare type RawEthereumListsToken = z.infer<typeof RawEthereumListsTokenSchema>;
export declare type Token = z.infer<typeof TokenSchema>;
export declare type TokenSocialMetadata = z.infer<typeof SocialSchema>;
