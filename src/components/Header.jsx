import React from "react";
import { Link } from "react-router-dom";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const Header = () => {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center rounded-b-2xl">
      <Link to="/" className="text-2xl font-bold text-buddyblue">
        BuddyWiFi
      </Link>
      <div className="flex items-center gap-4">
        <Link to="/dashboard" className="text-sm font-medium hover:underline">
          Dashboard
        </Link>
        <Link to="/admin" className="text-sm font-medium hover:underline">
          Admin Panel
        </Link>
        <WalletMultiButton />
      </div>
    </header>
  );
};

export default Header;
