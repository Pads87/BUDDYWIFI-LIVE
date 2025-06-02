import React from "react";
import { Link } from "react-router-dom";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navbar */}
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">BuddyWiFi</h1>
          <nav className="space-x-4 hidden md:block">
            <a href="#how" className="text-gray-700 hover:text-blue-500">How It Works</a>
            <a href="#join" className="text-gray-700 hover:text-blue-500">Join the Network</a>
            <a href="#map" className="text-gray-700 hover:text-blue-500">Map</a>
            <Link to="/dashboard" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Dashboard</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-cover bg-center py-20 text-center text-white" style={{ backgroundImage: "url('/internet-town.jpg')" }}>
        <h2 className="text-4xl font-bold mb-4">Connect. Share. Earn.</h2>
        <p className="text-xl max-w-2xl mx-auto">BuddyWiFi is a decentralized mesh Wi-Fi network powered by HaLow and crypto incentives. Earn by sharing. Connect affordably.</p>
      </section>

      {/* How It Works */}
      <section id="how" className="py-20 px-6 bg-white text-center">
        <h3 className="text-3xl font-bold mb-6">How It Works</h3>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <img src="/wifi-sharing.jpg" alt="Share WiFi" className="w-full h-48 object-cover rounded-xl shadow" />
            <h4 className="mt-4 font-semibold text-xl">Share Your Connection</h4>
            <p>Use a Provider or Access Node to share low-bandwidth WiFi using HaLow-enabled devices.</p>
          </div>
          <div>
            <img src="/community-network.jpg" alt="Community Mesh" className="w-full h-48 object-cover rounded-xl shadow" />
            <h4 className="mt-4 font-semibold text-xl">Join the Mesh</h4>
            <p>Connect with others in your area. Our mesh tech extends signal and coverage securely.</p>
          </div>
          <div>
            <img src="/buddywifi-face.png" alt="BuddyWiFi Face" className="w-full h-48 object-cover rounded-xl shadow" />
            <h4 className="mt-4 font-semibold text-xl">Earn & Connect</h4>
            <p>Earn $BUDDY tokens for uptime. Users can access the net using simple crypto payments.</p>
          </div>
        </div>
      </section>

      {/* Join the Network */}
      <section id="join" className="bg-blue-50 py-20 px-6 text-center">
        <h3 className="text-3xl font-bold mb-6">Start Your BuddyWiFi Node</h3>
        <p className="max-w-3xl mx-auto mb-10">Get a HaLow-enabled ESP32 or Raspberry Pi setup. Plug it in, connect it, and watch the network grow while you earn!</p>
        <img src="/clouds-background-clean.png" alt="Devices" className="mx-auto rounded-xl shadow max-w-xl" />
      </section>

      {/* Map Section */}
      <section id="map" className="py-20 px-6 bg-white text-center">
        <h3 className="text-3xl font-bold mb-6">Live Node Map</h3>
        <p className="mb-6">See active BuddyWiFi devices around the globe.</p>
        <div className="h-[400px] max-w-5xl mx-auto">
          <MapContainer center={[51.505, -0.09]} zoom={2} scrollWheelZoom={false} className="h-full rounded-xl shadow">
            <TileLayer
              attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </MapContainer>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 mt-20 text-center">
        <p>&copy; {new Date().getFullYear()} BuddyWiFi — All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
