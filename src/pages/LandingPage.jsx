import React from "react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white text-gray-900 font-sans">
      <div className="text-center py-20">
        <h1 className="text-5xl font-bold mb-4">Welcome to BuddyWiFi</h1>
        <p className="text-lg mb-6">A decentralized Wi-Fi sharing network powered by the community.</p>
        <img src="/buddywifi-face.png" alt="BuddyWiFi" className="mx-auto w-40 mb-6" />
        <a
          href="/dashboard"
          className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition"
        >
          Go to Dashboard
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
