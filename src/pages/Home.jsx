import React from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import buddyFace from "/public/buddywifi-face.png";
import communityImg from "/public/community-network.jpg";
import internetTown from "/public/internet-town.jpg";
import wifiSharing from "/public/wifi-sharing.jpg";

const Home = () => {
  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <div className="bg-[url('/clouds-background-clean.png')] bg-cover bg-center p-10 rounded-2xl shadow mb-10 text-center">
        <img src={buddyFace} alt="BuddyWiFi Logo" className="mx-auto w-32 mb-4" />
        <h1 className="text-4xl font-bold text-white drop-shadow">Welcome to BuddyWiFi</h1>
        <p className="text-lg text-white mt-2 max-w-xl mx-auto">
          A decentralized way to share internet access using HaLow mesh technology.
        </p>
        <div className="mt-4">
          <WalletMultiButton />
        </div>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-4 shadow text-center">
          <img src={communityImg} alt="Community Network" className="rounded-xl mb-2" />
          <h3 className="text-xl font-semibold">Built by the Community</h3>
          <p className="text-sm mt-1">Everyone can contribute by hosting or accessing WiFi.</p>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow text-center">
          <img src={internetTown} alt="Internet Town" className="rounded-xl mb-2" />
          <h3 className="text-xl font-semibold">Decentralized Coverage</h3>
          <p className="text-sm mt-1">Nodes work together to blanket your area with internet access.</p>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow text-center">
          <img src={wifiSharing} alt="WiFi Sharing" className="rounded-xl mb-2" />
          <h3 className="text-xl font-semibold">Earn $BUDDY</h3>
          <p className="text-sm mt-1">Providers get rewarded for uptime and serving users.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
