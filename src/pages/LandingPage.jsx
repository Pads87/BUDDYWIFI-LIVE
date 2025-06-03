import React from "react";
import "./LandingPage.css";
import LiveMap from "../components/LiveMap";
import faceImage from "/public/buddywifi-face.png";
import townImage from "/public/internet-town.jpg";
import wifiImage from "/public/wifi-sharing.jpg";
import cloudsBackground from "/public/clouds-background-clean.png";
import communityImage from "/public/community-network.jpg";

const LandingPage = () => {
  return (
    <>
      <div className="landing-page" style={{ backgroundImage: `url(${cloudsBackground})` }}>
        <header className="header">
          <img src={faceImage} alt="BuddyWiFi Logo" className="logo" />
          <h1 className="title">BuddyWiFi</h1>
          <p className="subtitle">Decentralized Wi-Fi for Everyone</p>
        </header>

        <section className="hero">
          <h2>Share Your Internet. Earn Crypto.</h2>
          <p>Turn your spare Wi-Fi into a community-powered network and get rewarded with $BUDDY tokens.</p>
        </section>

        <section className="section">
          <h2 className="section-heading">How It Works</h2>
          <div className="image-row">
            <div className="image-box">
              <img src={townImage} alt="Internet Town" />
              <p>Connect neighborhoods with mesh Wi-Fi.</p>
            </div>
            <div className="image-box">
              <img src={wifiImage} alt="WiFi Sharing" />
              <p>Guests access the internet via your node.</p>
            </div>
            <div className="image-box">
              <img src={communityImage} alt="Community Network" />
              <p>Earn crypto while helping your community.</p>
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section-heading">Get Started Today</h2>
          <p>
            Set up your BuddyWiFi node in minutes. No contracts. No limits.
            Just open connectivity and real rewards.
          </p>
        </section>

        <section id="map" className="section">
          <h2 className="section-heading">Live Node Map</h2>
          <LiveMap />
        </section>
      </div>
    </>
  );
};

export default LandingPage;
