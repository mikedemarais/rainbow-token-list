import { getAddress } from '@ethersproject/address';
import mapKeys from 'lodash/mapKeys';

/**
 * Inject the overrides locally from this project, rather than from process.cwd.
 */
import overrides from '../../rainbow-overrides.json';

export type OverrideToken = {
  color?: string;
  isCurated?: boolean;
  isVerified?: boolean;
  name?: string;
  symbol?: string;
  shadowColor?: string;
};

type OverrideFile = { [address: string]: OverrideToken };

export default async function parseOverrideFile(): Promise<OverrideFile> {
  // load svg manifest JSON file from directory
  return mapKeys(overrides, (...args) => {
    if (args[1] === 'ETH') return args[1];
    return getAddress(args[1]);
  });
}
