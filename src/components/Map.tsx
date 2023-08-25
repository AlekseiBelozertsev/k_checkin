import React, { useEffect, useRef, useState } from 'react';
import mapboxgl, { Marker } from 'mapbox-gl';
import mapStyles from './styles/map.module.scss';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = `${process.env.NEXT_PUBLIC_MAPBOX_API_KEY}`;

const MapComponent = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [lat, setLng] = useState(50.0755);
  const [lng, setLat] = useState(14.4378);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (!map.current && mapContainer.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [lng, lat],
        zoom: zoom,
        attributionControl: false,
      });
    }
  }, [lng, lat, zoom]);

  return (
    <div ref={mapContainer} className={`${mapStyles.main} map-container`} />
  );
};

export default MapComponent;
