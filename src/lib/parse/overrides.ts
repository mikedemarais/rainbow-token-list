import { getAddress } from '@ethersproject/address';
import { mapKeys } from 'lodash';

/**
 * Inject the overrides locally from this project, rather than from process.cwd.
 */
import { defaultOverrides } from 'rainbow-overrides';
import { loadTokenOverrides } from '../load';

export type OverrideToken = {
  color?: string;
  isCurated?: boolean;
  isVerified?: boolean;
  name?: string;
  symbol?: string;
  shadowColor?: string;
};

type OverrideFile = { [address: string]: OverrideToken };

export default async function parseOverrides(): Promise<OverrideFile> {
  const overrides = await loadTokenOverrides(defaultOverrides);
  // load svg manifest JSON file from directory
  return mapKeys(overrides, (...args) => {
    if (args[1] === 'eth') return args[1];
    return getAddress(args[1]);
  });
}
