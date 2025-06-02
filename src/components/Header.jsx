import React, { useEffect, useState } from 'react';
import { connectWallet, getWalletAddress } from '../wallet/wallet-utils';

const Header = () => {
  const [walletAddress, setWalletAddress] = useState('');

  const handleConnect = async () => {
    const address = await connectWallet();
    if (address) setWalletAddress(address);
  };

  useEffect(() => {
    const checkConnection = async () => {
      const address = await getWalletAddress();
      if (address) setWalletAddress(address);
    };
    checkConnection();
  }, []);

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">BuddyWiFi</h1>
      {walletAddress ? (
        <div className="text-sm text-gray-600">Connected: {walletAddress.slice(0, 4)}...{walletAddress.slice(-4)}</div>
      ) : (
        <button
          onClick={handleConnect}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
        >
          Connect Wallet
        </button>
      )}
    </header>
  );
};

export default Header;
