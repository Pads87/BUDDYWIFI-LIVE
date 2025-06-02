import React from "react";
import { useNavigate } from "react-router-dom";
import buddyFace from "/buddywifi-face.png";
import community from "/community-network.jpg";
import internetTown from "/internet-town.jpg";
import wifiSharing from "/wifi-sharing.jpg";
import cloudsBackground from "/clouds-background-clean.png";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-gray-800 font-sans">
      <header
        className="bg-cover bg-center h-96 flex flex-col justify-center items-center text-center text-white"
        style={{ backgroundImage: `url(${cloudsBackground})` }}
      >
        <h1 className="text-5xl font-bold drop-shadow-lg">Welcome to BuddyWiFi</h1>
        <p className="mt-4 text-xl drop-shadow">Decentralized Wi-Fi powered by the people</p>
        <button
          onClick={() => navigate("/dashboard")}
          className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white text-lg"
        >
          Enter Dashboard
        </button>
      </header>

      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">What is BuddyWiFi?</h2>
        <p className="text-center max-w-3xl mx-auto text-lg">
          BuddyWiFi is a decentralized mesh network where users share and access internet via long-range HaLow or ESP32 Access Points. It rewards uptime, coverage and reliability in $BUDDY tokens.
        </p>
        <img src={community} alt="Community Network" className="mt-8 w-full rounded-xl shadow-lg" />
      </section>

      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <img src={internetTown} alt="Town Internet" className="w-full rounded-xl shadow" />
          <div>
            <h3 className="text-2xl font-bold mb-4">How It Works</h3>
            <p className="text-lg mb-2">
              Provider Nodes use a wired connection to broadcast long-range signal.
            </p>
            <p className="text-lg mb-2">
              Access Nodes rebroadcast open Wi-Fi with a captive portal where users can pay for time or data.
            </p>
            <p className="text-lg">
              All users benefit from transparent uptime tracking and node rewards.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Share and Earn</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <img src={wifiSharing} alt="Sharing Wi-Fi" className="rounded-xl shadow" />
          </div>
          <div>
            <ul className="list-disc list-inside space-y-4 text-lg">
              <li>Earn $BUDDY tokens for uptime and data throughput</li>
              <li>Track your devices in the dashboard</li>
              <li>Easy setup with ESP32 or Raspberry Pi</li>
              <li>Plug-and-play reward system</li>
              <li>Transparent and trustless data ownership</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to explore the network?</h2>
        <button
          onClick={() => navigate("/dashboard")}
          className="px-8 py-4 bg-white text-blue-600 font-bold rounded-full text-lg hover:bg-gray-100"
        >
          Go to Dashboard
        </button>
      </section>

      <footer className="bg-gray-900 text-gray-300 py-6 text-center">
        &copy; {new Date().getFullYear()} BuddyWiFi. All rights reserved.
      </footer>
    </div>
  );
}
