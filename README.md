# 🌈️ Rainbow Token List tool

This tool compiles a list of ERC20 tokens from various sources.

### Use

Generate output at `output/rainbow-token-list.json` via:

```shell
yarn build
```

This library comes bundled with a default list in case you are unable to load
fresh data over the Internet. You can import it like so:

```ts
import tokens from 'rainbow-token-list/output/rainbow-token-list.json';
```

### Notes

- If you get a `zlib: unexpected end of file` error when building, run `yarn clean`.
