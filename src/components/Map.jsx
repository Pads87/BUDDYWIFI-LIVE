import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    fetch("/api/devices")
      .then(res => res.json())
      .then(data => setDevices(data))
      .catch(err => console.error("Failed to load devices", err));
  }, []);

  return (
    <div className="w-full h-[500px] rounded-xl shadow overflow-hidden">
      <MapContainer center={[51.505, -0.09]} zoom={5} className="h-full w-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='© OpenStreetMap contributors'
        />
        {devices.map((device, index) => (
          <Marker key={index} position={[device.lat, device.lon]}>
            <Popup>
              <strong>{device.name}</strong><br />
              Type: {device.type}<br />
              Status: {device.status}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
