# 🌈️ Rainbow Token List tool

This tool compiles a list of ERC20 tokens from various sources.

### Use

Load the updated Token List and overwrite it at `output/rainbow-token-list.json`
with:

```shell
yarn write
```

This package comes bundled with a copy in case you are unable to load fresh data
over the Internet. You can import it like so:

```ts
import tokens from 'rainbow-token-list/rainbow-token-list.json';
```

### Library interface
```ts
/**
 * @module src/lib/build.ts
 * 
 * Parses various pieces of data (contract lists, local property overrides, data
 * sources, etc.) and returns the Token List.
 * 
 * The parser, and therefore also this function, rely on Git. We use
 * isometric-git to avoid needing the Git binary.
 */
async function build(): Token[] {}
/**
 * @module src/lib/write.ts
 * 
 * Calls `build()` and writes the Token List to disk at
 * output/rainbow-token-list.json.
 */
async function write(): void {}
```

### Notes

- If you get a `zlib: unexpected end of file` error when building, run `yarn clean`.
