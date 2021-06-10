import { resolve } from 'path';
import { build } from './build';
import { writeToDisk } from './parse/parser';

export async function write() {
  const tokens = await build();
  await writeToDisk(
    {
      name: 'Rainbow Token List',
      timestamp: new Date().toISOString(),
      logoURI: 'https://avatars0.githubusercontent.com/u/48327834?s=200&v=4',
      version: {
        major: 1,
        minor: 2,
        patch: 1,
      },
      keywords: ['rainbow'],
      tokens,
    },
    resolve(process.cwd(), './output'),
    'rainbow-token-list.json'
  );
}
