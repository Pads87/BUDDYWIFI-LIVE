import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import LiveMap from "../components/LiveMap";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="animated-clouds-background"></div>

      <nav className="navbar">
        <div className="nav-logo">BuddyWiFi</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#how-it-works">How it Works</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#map">Live Map</a></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
        </ul>
      </nav>

      <header className="hero">
        <h1 className="hero-title">Join the Future of Internet Sharing</h1>
        <p className="hero-subtitle">
          BuddyWiFi is a decentralized mesh Wi-Fi network powered by DePIN and Solana.
        </p>
        <a href="#about" className="cta-button">Learn More</a>
      </header>

      <section id="about" className="section">
        <div className="section-content">
          <img src="/community-network.jpg" alt="Community Network" />
          <div>
            <h2>What is BuddyWiFi?</h2>
            <p>
              BuddyWiFi allows anyone to share their internet securely and earn rewards. We use low-power devices like ESP32 and Raspberry Pi to broadcast access points that users can join and pay via crypto.
            </p>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="section reverse">
        <div className="section-content">
          <div>
            <h2>How It Works</h2>
            <p>
              Provider nodes connect to the internet and broadcast via HaLow. Access nodes rebroadcast it via 2.4GHz. Users connect and are redirected to pay for time and data.
            </p>
          </div>
          <img src="/internet-town.jpg" alt="Internet in Town" />
        </div>
      </section>

      <section id="features" className="section">
        <h2 className="section-heading">Key Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Crypto Powered</h3>
            <p>Payments and rewards are handled via Solana and Phantom wallets.</p>
          </div>
          <div className="feature-card">
            <img src="/wifi-sharing.jpg" alt="WiFi Sharing" />
            <h3>Mesh Network</h3>
            <p>Devices form a resilient, low-latency mesh across urban areas.</p>
          </div>
          <div className="feature-card">
            <img src="/community-network.jpg" alt="Community" />
            <h3>Easy Setup</h3>
            <p>Plug in your device, register it, and start earning immediately.</p>
          </div>
        </div>
      </section>

      <section id="map" className="section">
        <h2 className="section-heading">Live Node Map</h2>
        <LiveMap />
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} BuddyWiFi – All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
