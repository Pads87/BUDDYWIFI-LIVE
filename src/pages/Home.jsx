import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white">
        <div className="flex items-center gap-3">
          <img src="/buddywifi-face.png" alt="BuddyWiFi Logo" className="h-10 w-10" />
          <h1 className="text-xl font-bold">BuddyWiFi</h1>
        </div>
        <div className="space-x-4">
          <Link to="/dashboard" className="text-blue-600 hover:underline">
            Provider Login
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header
        className="text-center py-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/clouds-background-clean.png')" }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Decentralized Wi-Fi for Everyone</h2>
        <p className="max-w-xl mx-auto text-lg">Join the BuddyWiFi network and share internet with your community. Earn rewards. Stay connected.</p>
      </header>

      {/* Features */}
      <section className="py-16 px-6 grid grid-cols-1 md:grid-cols-3 gap-10 bg-gray-100">
        <div className="bg-white rounded-2xl shadow p-4">
          <img src="/community-network.jpg" alt="Community" className="rounded-xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Powered by Community</h3>
          <p>Anyone can become a provider or access point using BuddyWiFi hardware. Bring Wi-Fi to underserved areas.</p>
        </div>
        <div className="bg-white rounded-2xl shadow p-4">
          <img src="/internet-town.jpg" alt="Coverage" className="rounded-xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Nationwide Coverage</h3>
          <p>Our goal is to build a mesh network that scales from small towns to cities. Help us grow node by node.</p>
        </div>
        <div className="bg-white rounded-2xl shadow p-4">
          <img src="/wifi-sharing.jpg" alt="Rewards" className="rounded-xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Earn Crypto Rewards</h3>
          <p>Get rewarded in $BUDDY for uptime and user connections. Seamless and secure crypto wallet login.</p>
        </div>
      </section>

      {/* Node Map Section */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Live Node Map</h2>
        <div className="h-[500px] w-full rounded-xl shadow overflow-hidden">
          <iframe
            title="BuddyWiFi Node Map"
            src="https://buddywifi.com/map" // <-- Update this to the actual map endpoint
            className="w-full h-full border-0"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-sm text-gray-500">
        © {new Date().getFullYear()} BuddyWiFi. All rights reserved.
      </footer>
    </div>
  );
}
