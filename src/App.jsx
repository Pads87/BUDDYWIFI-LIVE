import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import {
  ConnectionProvider,
  WalletProvider
} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider
} from "@solana/wallet-adapter-react-ui";
import {
  PhantomWalletAdapter
} from "@solana/wallet-adapter-wallets";
import "@solana/wallet-adapter-react-ui/styles.css";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import AdminPanel from "./pages/AdminPanel";
import ProviderDashboard from "./pages/ProviderDashboard";

// Solana setup
const wallets = [new PhantomWalletAdapter()];
const endpoint = "https://api.mainnet-beta.solana.com";

const App = () => {
  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <Router>
            <div className="min-h-screen flex flex-col bg-lightgray text-gray-900">
              <Header />
              <main className="flex-grow p-4 md:p-6">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/admin" element={<AdminPanel />} />
                  <Route path="/dashboard" element={<ProviderDashboard />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default App;
