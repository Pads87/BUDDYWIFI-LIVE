import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="text-center px-4 py-10 max-w-5xl mx-auto">
      <img
        src="/clouds-background-clean.png"
        alt="BuddyWiFi background"
        className="w-full h-auto rounded-2xl shadow mb-6"
      />
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-600">Welcome to BuddyWiFi</h1>
      <p className="text-lg md:text-xl mb-6">
        BuddyWiFi is a decentralized community-powered Wi-Fi network. Share your connection and earn rewards with our
        $BUDDY token. Access affordable internet anywhere through mesh-connected nodes.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <img src="/community-network.jpg" alt="Community" className="rounded-xl mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Powered by the Community</h2>
          <p>Anyone can host a node and earn. Our network grows with every device you add.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <img src="/internet-town.jpg" alt="Coverage" className="rounded-xl mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Affordable Internet Access</h2>
          <p>We bring connectivity to every corner — pay only for what you use, no contracts.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <img src="/wifi-sharing.jpg" alt="Sharing" className="rounded-xl mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Smart Wi-Fi Sharing</h2>
          <p>Enable your unused bandwidth to help others and get rewarded in return.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <img src="/buddywifi-face.png" alt="Buddy" className="rounded-xl mb-4" />
          <h2 className="text-2xl font-semibold mb-2">The Face of Connectivity</h2>
          <p>Meet Buddy — your friendly guide to a borderless internet experience.</p>
        </div>
      </div>

      <div className="mt-10">
        <Link to="/dashboard">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-full text-lg hover:bg-blue-700 transition">
            Go to Dashboard
          </button>
        </Link>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Live Node Map</h2>
        <iframe
          src="https://buddywifi.com/map"
          title="BuddyWiFi Node Map"
          className="w-full h-[400px] rounded-xl shadow"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default LandingPage;
