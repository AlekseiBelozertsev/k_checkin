import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import mapStyles from './styles/map.module.scss';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useMapStore } from '@/utils/store/mapStore';

mapboxgl.accessToken = `${process.env.NEXT_PUBLIC_MAPBOX_API_KEY}`;

const MapComponent = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  //stores
  const { zoom, currentCenter, places } = useMapStore();

  useEffect(() => {
    if (!map.current && mapContainer.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: currentCenter,
        zoom: zoom,
        attributionControl: false,
      });
    }
    console.log(`current center in the map is ${currentCenter}`);
  }, [zoom, currentCenter]);

  useEffect(() => {
    places.forEach((place) => {
      new mapboxgl.Marker()
        .setLngLat([
          place.features[0].properties.coordinates.longitude,
          place.features[0].properties.coordinates.latitude,
        ])
        .addTo(map.current!);
    });
  }, [places]);

  return (
    <div ref={mapContainer} className={`${mapStyles.main} map-container`} />
  );
};

export default MapComponent;
