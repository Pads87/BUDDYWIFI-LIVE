import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <header className="relative bg-cover bg-center h-[90vh] flex items-center justify-center text-white" style={{ backgroundImage: "url('/clouds-background-clean.png')" }}>
        <div className="text-center px-4">
          <img src="/buddywifi-face.png" alt="BuddyWiFi Logo" className="mx-auto w-40 mb-4" />
          <h1 className="text-4xl md:text-6xl font-bold drop-shadow">Welcome to BuddyWiFi</h1>
          <p className="text-xl md:text-2xl mt-4 drop-shadow">The community-powered internet sharing network.</p>
          <Link to="/dashboard" className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700">
            Provider Login
          </Link>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <img src="/wifi-sharing.jpg" alt="WiFi Sharing" className="w-full h-40 object-cover rounded" />
            <h3 className="mt-4 text-xl font-semibold">Share WiFi, Earn Crypto</h3>
            <p className="mt-2 text-gray-600">Broadcast your BuddyWiFi and get rewarded in $BUDDY.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <img src="/internet-town.jpg" alt="Internet Coverage" className="w-full h-40 object-cover rounded" />
            <h3 className="mt-4 text-xl font-semibold">Bring Internet Everywhere</h3>
            <p className="mt-2 text-gray-600">Build a decentralized mesh network with Buddy nodes.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <img src="/community-network.jpg" alt="Community" className="w-full h-40 object-cover rounded" />
            <h3 className="mt-4 text-xl font-semibold">Built by the Community</h3>
            <p className="mt-2 text-gray-600">Support open infrastructure and fair internet access.</p>
          </div>
        </div>
      </section>

      {/* Live Map Section */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Live Node Map</h2>
          <iframe
            src="https://buddywifi.com/map" // replace with actual map embed if different
            title="BuddyWiFi Live Map"
            className="w-full h-[500px] rounded shadow"
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} BuddyWiFi. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
