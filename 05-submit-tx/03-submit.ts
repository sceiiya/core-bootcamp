// 0x3b26E8DA9aDedAAe86a260b6354aC1855AA65C14

import "dotenv/config";
import {
  Hex,
  createWalletClient,
  getContract,
  http,
  publicActions,
} from "viem";
import { privateKeyToAccount } from "viem/accounts";
import artifacts from "./submit.artifacts.json";

// Application Binary Interface
const { abi } = artifacts;

const privateKey = process.env.PRIVATE_KEY;
const account = privateKeyToAccount(`0x${privateKey}` as Hex);

(async () => {
  const client = createWalletClient({
    account,
    transport: http(process.env.API_URL),
  }).extend(publicActions);

  const contractAddress = '0x3b26E8DA9aDedAAe86a260b6354aC1855AA65C14';
  const contract = getContract({
    address: contractAddress,
    abi,
    client,
  });

  const tx = await contract.write.recordSubmission([
    'sceiiya',
    'Scheidj',
    '0x5df4a8abe783f8a846fbdeb595421051d464c55b',
    '0x7Ec92b42246FF595504813Fbc91F9a3923c4E8eC'
    ]);    
  console.log('tx', tx);
})();