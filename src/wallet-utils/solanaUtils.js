import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";

export const getConnection = (network = "mainnet-beta") => {
  return new Connection(clusterApiUrl(network), "confirmed");
};

export const getBalance = async (publicKeyString, network = "mainnet-beta") => {
  try {
    const connection = getConnection(network);
    const publicKey = new PublicKey(publicKeyString);
    const balance = await connection.getBalance(publicKey);
    return balance / 1e9; // Convert lamports to SOL
  } catch (error) {
    console.error("Failed to get balance:", error);
    return null;
  }
};