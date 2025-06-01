import React from "react";
import {
  ConnectionProvider,
  WalletProvider
} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
  WalletMultiButton
} from "@solana/wallet-adapter-react-ui";
import {
  PhantomWalletAdapter
} from "@solana/wallet-adapter-wallets";
import "@solana/wallet-adapter-react-ui/styles.css";

const App = () => {
  const wallets = [new PhantomWalletAdapter()];
  const endpoint = "https://api.mainnet-beta.solana.com";

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <div className="min-h-screen bg-lightgray p-4">
            <header className="flex justify-between items-center bg-white shadow p-4 rounded-2xl mb-6">
              <h1 className="text-2xl font-bold text-buddyblue">BuddyWiFi</h1>
              <WalletMultiButton />
            </header>

            <main className="bg-white p-6 rounded-2xl shadow">
              <h2 className="text-xl font-semibold mb-4">Welcome to BuddyWiFi</h2>
              <p className="mb-2">Connect your Solana wallet to manage your nodes.</p>
              {/* Add routes, dashboard, map, or other components here */}
            </main>
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default App;
