import isEmpty from 'lodash/isEmpty';
import pick from 'lodash/pick';
// import { tmpdir } from 'os';
import { resolve } from 'path';
import {
  CONTRACT_MAP_REPO,
  RawContractMapToken,
  RawContractMapTokenSchema,
  Token,
} from '../../constants';
import { fetchRepository } from '../../utils/git';
import { parseJsonFile, validateTokenData } from './parser';

// the JSON file exported by `eth-contract-metadata` is keyed by token contract address
type RawContractMap = { [address: string]: RawContractMapToken };

export default async function parseContractMap(): Promise<Token[]> {
  // fetch the latest commit from `eth-contract-metadata` repo and save it to disk
  const extractedAt = await fetchRepository(CONTRACT_MAP_REPO);

  // load contract map JSON file from directory
  const jsonFile = resolve(extractedAt, 'contract-map.json');
  const contractMap = await parseJsonFile<RawContractMap>(jsonFile);

  return (
    Object.keys(contractMap)
      .map(
        (address: string): RawContractMapToken => ({
          ...contractMap[address],
          address,
        })
      )
      // remove any unknown/undesirable keys from each token object.
      .map(token => pick(token, Object.keys(RawContractMapTokenSchema.shape)))
      // remove any tokens from the array if they contain null values for the
      // keys that we care about.
      .filter(token => Object.values(token).some(isEmpty))
      .map(validateTokenData)
  );
}
