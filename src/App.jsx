import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Map from "./components/Map";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Header />

      <main className="p-4 space-y-12">
        <section className="text-center">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to BuddyWiFi</h1>
          <p className="max-w-2xl mx-auto text-lg">
            BuddyWiFi is a decentralized mesh Wi-Fi network powered by the community. Share your
            connection, earn $BUDDY, and help provide internet access everywhere.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-6 items-center">
          <img
            src="/wifi-sharing.jpg"
            alt="WiFi Sharing"
            className="rounded-2xl shadow-md w-full"
          />
          <div>
            <h2 className="text-2xl font-semibold mb-2">How It Works</h2>
            <p>
              Provider Nodes connect to the internet and broadcast HaLow signals. Access Nodes rebroadcast
              them as public Wi-Fi. Visitors can pay for internet access using crypto or card.
            </p>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Decentralized and Rewarding</h2>
            <p>
              Node operators earn $BUDDY for uptime and coverage. All devices report stats and locations to
              build a real-time network map.
            </p>
          </div>
          <img
            src="/internet-town.jpg"
            alt="Internet Town"
            className="rounded-2xl shadow-md w-full"
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-center mb-4">Live Node Map</h2>
          <Map />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
