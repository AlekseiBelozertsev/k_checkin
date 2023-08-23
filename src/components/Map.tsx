import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import mapStyles from './styles/map.module.scss';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = `${process.env.NEXT_PUBLIC_MAPBOX_API_KEY}`;

const MapComponent = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (!map.current && mapContainer.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [lng, lat],
        zoom: zoom,
      });
    }
  }, [lng, lat, zoom]);

  return <div ref={mapContainer} className={`${mapStyles.main} map-container`} />;
};

export default MapComponent;
