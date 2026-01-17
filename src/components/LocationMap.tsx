'use client';

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix Leaflet icon issue
const markerIcon = L.icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

interface LocationMapProps {
  onLocationSelect?: (lat: number, lng: number, address: string) => void;
  initialLat?: number;
  initialLng?: number;
}

function MapClickHandler({ onLocationSelect }: { onLocationSelect?: (lat: number, lng: number) => void }) {
  useMapEvents({
    click(e) {
      if (onLocationSelect) {
        onLocationSelect(e.latlng.lat, e.latlng.lng);
      }
    },
  });
  return null;
}

export function LocationMap({ onLocationSelect, initialLat = 40, initialLng = -74 }: LocationMapProps) {
  const [position, setPosition] = useState<[number, number]>([initialLat, initialLng]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Try to get user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setPosition([position.coords.latitude, position.coords.longitude]);
          if (onLocationSelect) {
            onLocationSelect(position.coords.latitude, position.coords.longitude, 'Current Location');
          }
        },
        (error) => {
          console.log('Location access denied, using default');
        }
      );
    }
  }, [onLocationSelect]);

  if (!mounted) return null;

  const handleMapClick = (lat: number, lng: number) => {
    setPosition([lat, lng]);
    if (onLocationSelect) {
      onLocationSelect(lat, lng, `${lat.toFixed(4)}, ${lng.toFixed(4)}`);
    }
  };

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: '100%', width: '100%', borderRadius: '0.75rem' }}
      className="border-2 border-slate-600"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={markerIcon}>
        <Popup>
          <div className="text-sm">
            <p className="font-semibold">Selected Location</p>
            <p className="text-xs text-gray-600">Lat: {position[0].toFixed(4)}</p>
            <p className="text-xs text-gray-600">Lng: {position[1].toFixed(4)}</p>
          </div>
        </Popup>
      </Marker>
      <MapClickHandler onLocationSelect={handleMapClick} />
    </MapContainer>
  );
}
