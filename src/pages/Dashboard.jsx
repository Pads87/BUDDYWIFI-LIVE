import React, { useEffect, useState } from "react";
import LiveMap from "../components/LiveMap";
import AdminPanel from "../pages/AdminPanel";
import ProviderDashboard from "../pages/ProviderDashboard";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Dashboard = () => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    const fetchWalletData = async () => {
      try {
        const { connectPhantomWallet, getBalance } = await import("../wallet-utils");
        const pubKey = await connectPhantomWallet();
        if (pubKey) {
          setWalletAddress(pubKey);
          const bal = await getBalance(pubKey);
          setBalance(bal);
        }
      } catch (error) {
        console.error("Failed to fetch wallet data:", error);
      }
    };
    fetchWalletData();
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Header />
      <main className="p-4">
        <LiveMap />
        {walletAddress && (
          <ProviderDashboard walletAddress={walletAddress} balance={balance} />
        )}
        <AdminPanel />
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
