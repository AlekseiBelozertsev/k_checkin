import React, { useEffect, useRef, useState } from 'react';
import mapboxgl, { Marker } from 'mapbox-gl';
import mapStyles from './styles/map.module.scss';
import 'mapbox-gl/dist/mapbox-gl.css';
import { places } from '@/utils/mocks/places';

mapboxgl.accessToken = `${process.env.NEXT_PUBLIC_MAPBOX_API_KEY}`;

const MapComponent = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [zoom, setZoom] = useState(9);
  const [marker, setMarker] = useState<mapboxgl.Marker>();

  useEffect(() => {
    if (!map.current && mapContainer.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [14.4378, 50.0755],
        zoom: zoom,
        attributionControl: false,
      });
    }
  }, [zoom]);

  useEffect(() => {
    if (map.current) {
      places.forEach((place) => {
        new mapboxgl.Marker()
          .setLngLat([
            place.features[0].properties.coordinates.longitude,
            place.features[0].properties.coordinates.latitude,
          ])
          .addTo(map.current!);
      });
    }
  }, [places]);

  return (
    <div ref={mapContainer} className={`${mapStyles.main} map-container`} />
  );
};

export default MapComponent;
