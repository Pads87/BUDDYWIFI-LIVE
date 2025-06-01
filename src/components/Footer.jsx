import React from "react";

const Footer = () => {
  return (
    <footer className="text-center text-sm text-gray-500 mt-10 py-6 border-t">
      © {new Date().getFullYear()} BuddyWiFi. All rights reserved.
    </footer>
  );
};

export default Footer;
