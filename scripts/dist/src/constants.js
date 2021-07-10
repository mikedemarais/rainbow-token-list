"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RawEthereumListsTokenSchema = exports.RawContractMapTokenSchema = exports.TokenSchema = exports.TokenExtensionsSchema = exports.TokenDeprecationSchema = exports.SocialSchema = exports.TokenListEnumSchema = exports.TOKEN_LISTS = exports.TokenListTypeSchema = exports.TokenListItemSchema = exports.REMOTE_TOKEN_OVERRIDES_ENDPOINT = exports.REMOTE_TOKEN_LIST_ENDPOINT = exports.ETHEREUM_LISTS_REPO = exports.CONTRACT_MAP_REPO = exports.PRODUCTION = void 0;
const zod_1 = require("zod");
exports.PRODUCTION = process.env.NODE_ENV === 'production';
exports.CONTRACT_MAP_REPO = 'metamask/eth-contract-metadata';
exports.ETHEREUM_LISTS_REPO = 'ethereum-lists/tokens/tokens/eth';
//
// Related to Token List and Token Overrides.
//
exports.REMOTE_TOKEN_LIST_ENDPOINT = 'https://raw.githubusercontent.com/ctjlewis/rainbow-token-list/service-compatibility/src/data/rainbow-token-list.json';
exports.REMOTE_TOKEN_OVERRIDES_ENDPOINT = 'https://raw.githubusercontent.com/ctjlewis/rainbow-overrides/master/src/data/rainbow-overrides.json';
exports.TokenListItemSchema = zod_1.z.string().url().nonempty();
exports.TokenListTypeSchema = zod_1.z.record(exports.TokenListItemSchema);
exports.TOKEN_LISTS = {
    aave: 'https://tokenlist.aave.eth.link',
    coingecko: 'https://tokens.coingecko.com/uniswap/all.json',
    dharma: 'https://tokenlist.dharma.eth.link',
    kleros: 'http://t2crtokens.eth.link',
    roll: 'https://app.tryroll.com/tokens.json',
    synthetix: 'https://synths.snx.eth.link',
    wrapped: 'http://wrapped.tokensoft.eth.link',
};
exports.TokenListEnumSchema = zod_1.z.enum([
    'aave',
    'coingecko',
    'dharma',
    'kleros',
    'roll',
    'synthetix',
    'wrapped',
]);
exports.SocialSchema = zod_1.z.object({
    blog: zod_1.z.string().optional(),
    chat: zod_1.z.string().optional(),
    discord: zod_1.z.string().optional(),
    facebook: zod_1.z.string().optional(),
    forum: zod_1.z.string().optional(),
    github: zod_1.z.string().optional(),
    gitter: zod_1.z.string().optional(),
    instagram: zod_1.z.string().optional(),
    linkedin: zod_1.z.string().optional(),
    medium: zod_1.z.string().optional(),
    reddit: zod_1.z.string().optional(),
    slack: zod_1.z.string().optional(),
    telegram: zod_1.z.string().optional(),
    twitter: zod_1.z.string().optional(),
    youtube: zod_1.z.string().optional(),
});
exports.TokenDeprecationSchema = zod_1.z.object({
    new_address: zod_1.z.string().optional(),
});
exports.TokenExtensionsSchema = zod_1.z.object({
    color: zod_1.z.string().optional(),
    isRainbowCurated: zod_1.z.boolean().optional(),
    isVerified: zod_1.z.boolean().optional(),
    shadowColor: zod_1.z.string().optional(),
});
exports.TokenSchema = zod_1.z.object({
    address: zod_1.z.string().regex(/^0x[a-fA-F0-9]{40}$/),
    chainId: zod_1.z.number().optional(),
    decimals: zod_1.z.number().min(0),
    deprecation: exports.TokenDeprecationSchema.optional(),
    extensions: exports.TokenExtensionsSchema.optional(),
    name: zod_1.z.string(),
    social: exports.SocialSchema.optional(),
    symbol: zod_1.z.string(),
    website: zod_1.z.string().optional(),
});
/**
 * Raw token data that is loaded from the JSON files.
 */
exports.RawContractMapTokenSchema = zod_1.z.object({
    address: zod_1.z.string(),
    decimals: zod_1.z.union([zod_1.z.string(), zod_1.z.number()]),
    name: zod_1.z.string(),
    symbol: zod_1.z.string(),
});
/**
 * Raw token data that is loaded from the JSON files.
 */
exports.RawEthereumListsTokenSchema = zod_1.z.object({
    address: zod_1.z.string().optional(),
    decimals: zod_1.z.union([zod_1.z.string(), zod_1.z.number()]).optional(),
    deprecation: exports.TokenDeprecationSchema.optional(),
    name: zod_1.z.string().optional(),
    social: exports.SocialSchema.optional(),
    symbol: zod_1.z.string().optional(),
    website: zod_1.z.string().optional(),
});
//# sourceMappingURL=constants.js.map