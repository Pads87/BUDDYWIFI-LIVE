import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const LiveMap = () => {
  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    fetch('https://api.buddywifi.com/api/heartbeat')
      .then((res) => res.json())
      .then((data) => {
        setNodes(data.devices || []);
      })
      .catch((err) => console.error('Failed to fetch node data:', err));
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
        {nodes.map((node, i) => (
          <Marker key={i} position={[node.latitude, node.longitude]}>
            <Popup>
              <strong>{node.name}</strong><br />
              Type: {node.type}<br />
              Status: {node.status}<br />
              Speed: {node.download_speed} ↓ / {node.upload_speed} ↑ Mbps
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default LiveMap;
