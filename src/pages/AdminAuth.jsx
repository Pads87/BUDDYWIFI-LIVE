// AdminAuth.jsx (under /src/pages)
import React, { useEffect, useState } from 'react';
import { connectPhantomWallet, getWalletAddress } from '../wallet-utils';

const ADMIN_WALLET_ADDRESS = 'YOUR_ADMIN_WALLET_ADDRESS_HERE';

export default function AdminAuth() {
  const [wallet, setWallet] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  const connect = async () => {
    const connectedWallet = await connectPhantomWallet();
    setWallet(connectedWallet);
    if (connectedWallet === ADMIN_WALLET_ADDRESS) setIsAdmin(true);
  };

  useEffect(() => {
    connect();
  }, []);

  if (!wallet) return <p>Connecting wallet...</p>;
  if (!isAdmin) return <p>Access Denied: Not an admin wallet.</p>;

  return <div>Welcome Admin. Access granted.</div>;
}
