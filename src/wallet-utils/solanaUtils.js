import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";

// Create a connection to the Solana network
export const getConnection = (network = "mainnet-beta") => {
  return new Connection(clusterApiUrl(network), "confirmed");
};

// Get the SOL balance of a wallet by public key string
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

// Extract and return the wallet address from a connected wallet object
export const getWalletAddress = (wallet) => {
  try {
    if (wallet?.publicKey) {
      return wallet.publicKey.toBase58();
    }
    return null;
  } catch (error) {
    console.error("Failed to get wallet address:", error);
    return null;
  }
};
