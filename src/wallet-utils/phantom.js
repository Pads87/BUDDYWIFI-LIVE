export async function connectPhantomWallet() {
  if (window.solana && window.solana.isPhantom) {
    try {
      const resp = await window.solana.connect();
      return resp.publicKey.toString();
    } catch (err) {
      console.error("Phantom wallet connection error:", err);
      throw err;
    }
  } else {
    throw new Error("Phantom wallet not found. Please install it.");
  }
}

export function disconnectPhantomWallet() {
  if (window.solana && window.solana.isPhantom) {
    window.solana.disconnect();
  }
}

export function onAccountChange(callback) {
  if (window.solana && window.solana.isPhantom) {
    window.solana.on("accountChanged", (publicKey) => {
      callback(publicKey ? publicKey.toString() : null);
    });
  }
}