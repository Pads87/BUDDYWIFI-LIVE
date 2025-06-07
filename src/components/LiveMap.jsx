import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix Leaflet's default icon issue with webpack
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const LiveMap = () => {
  const [nodes, setNodes] = useState([]);

  const fetchData = () => {
    fetch('https://b80c-86-2-48-212.ngrok-free.app/api/devices')
      .then((res) => res.json())
      .then((data) => {
        setNodes(data.devices || []);
      })
      .catch((err) => console.error('Failed to fetch node data:', err));
  };

  useEffect(() => {
    fetchData(); // Initial load

    const interval = setInterval(() => {
      fetchData(); // Auto-refresh every 30 seconds
    }, 30000);

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <div style={{ height: '600px', width: '100%', marginTop: '4rem' }}>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={2}
        scrollWheelZoom={true}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {nodes.map((node, index) => (
          <Marker key={index} position={[node.latitude, node.longitude]}>
            <Popup>
              <strong>{node.name}</strong><br />
              Type: {node.device_type || 'Unknown'}<br />
              Status: {node.status || 'Unknown'}<br />
              Download: {node.download_speed || 0} Mbps ↓<br />
              Upload: {node.upload_speed || 0} Mbps ↑
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default LiveMap;

