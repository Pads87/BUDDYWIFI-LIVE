import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Map from "./components/Map";
import ProviderDashboard from "./pages/ProviderDashboard";
import AdminPanel from "./pages/AdminPanel";
import { connectPhantomWallet, getBalance } from "./wallet-utils";

function App() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    connectPhantomWallet().then((pubKey) => {
      setWalletAddress(pubKey);
      if (pubKey) {
        getBalance(pubKey).then((bal) => setBalance(bal));
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Header />
      <main className="p-4">
        <Map />
        {walletAddress && (
          <ProviderDashboard walletAddress={walletAddress} balance={balance} />
        )}
      </main>
      <AdminPanel />
      <Footer />
    </div>
  );
}

export default App;
