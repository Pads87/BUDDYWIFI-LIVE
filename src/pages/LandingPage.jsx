import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import LiveMap from "../components/LiveMap";

const LandingPage = () => {
  return (
    <div className="animated-bg">
      {/* Animated Video Background */}
      <video
        className="background-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/buddy-background.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Navigation Bar */}
      <nav className="navbar enhanced-navbar">
        <div className="nav-logo">BuddyWiFi</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#how-it-works">How it Works</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#map">Live Map</a></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <h1 className="hero-title">Join the Future of Internet Sharing</h1>
        <p className="hero-subtitle">
          BuddyWiFi is a decentralized mesh Wi-Fi network powered by DePIN and Solana.
        </p>
        <a href="#about" className="cta-button">Learn More</a>
      </header>

      {/* About Section */}
      <section id="about" className="section">
        <div className="section-content">
          <div>
            <h2>What is BuddyWiFi?</h2>
            <p>
              BuddyWiFi allows anyone to share their internet securely to earn $BUDDY.
              We use highly efficent devices to broadcast access
              points, that everyday users can join all over the world and pay via a subsciption.
            </p>
          </div>
          <img src="/buddy-night.png" alt="Buddy in the Night" />
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="section reverse">
        <div className="section-content">
          <div>
            <h2>How It Works</h2>
            <p>
              Buddy Provider nodes connect to a household internet router and re-broadcast via HaLow. Buddy Access nodes then
              connect to the HaLow network and rebroadcast it via 2.4GHz WiFi. As we grow, this then creates a world wide mesh where Everyday users will signup to Daily/Weekly/Monthly/Yearly subscriptions. The revenue will then be used to buy back the token and burnt.
            </p>
          </div>
          <img src="/internet-town.jpg" alt="Internet in Town" />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section">
        <h2 className="section-heading">Key Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <img src="/wifi-sharing.jpg" alt="WiFi Sharing" />
            <h3>Crypto Powered</h3>
            <p>Anyone can join the worldwide mesh and pay via web2 or web3 payment services.</p>
          </div>
          <div className="feature-card">
            <img src="/community-network.jpg" alt="Community" />
            <h3>Mesh Network</h3>
            <p>Devices form a resilient, low-latency mesh across urban areas.</p>
          </div>
          <div className="feature-card">
            <img src="/buddy-provider.png" alt="Provider" />
            <h3>Easy Setup</h3>
            <p>Plug in your device, register it, and start earning immediately.</p>
          </div>
        </div>
      </section>

      {/* Live Map Section */}
      <section id="map" className="section">
        <h2 className="section-heading">Live Node Map</h2>
        <LiveMap />
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} BuddyWiFi – All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
