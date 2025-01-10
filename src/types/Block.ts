import { BigNumber } from "alchemy-sdk";

type Block = {
  hash: string | null, // 32 Bytes - hash of the block. null when it's a pending block.
  parentHash: string, // 32 Bytes - hash of the parent block.
  number: number | null, // The block number. null when it's a pending block.
  timestamp: number, // The unix timestamp for when the block was collated.
  nonce: string, // A nonce value for transaction ordering and replay prevention.
  difficulty: number, // Integer representing the difficulty for this block.
  gasLimit: BigNumber, // Maximum gas allowed in this block.
  gasUsed: BigNumber, // Total gas used by all transactions in this block.
  miner: string, // 20 Bytes - the address of the beneficiary of mining rewards.
  transactions: Array<any>, // Array of transactions (define a more specific type if needed).
};
