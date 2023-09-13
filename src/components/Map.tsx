import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import mapStyles from './styles/map.module.scss';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useMapStore } from '@/utils/store/mapStore';
import baraIcon from '../../public/icons/baraIcon.svg';

mapboxgl.accessToken = `${process.env.NEXT_PUBLIC_MAPBOX_API_KEY}`;

const MapComponent = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  // Stores
  const { zoom, currentCenter, places } = useMapStore();

  // This effect listens for changes in currentCenter and re-renders the map when it changes.
  useEffect(() => {
    if (map.current) {
      map.current.setCenter(currentCenter);
    }
  }, [currentCenter]);

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
  }, [currentCenter, zoom]);

  const createCustomMarkerElement = () => {
    if (typeof window === 'undefined') {
      return null;
    }

    const element = document.createElement('div');
    element.className = mapStyles.customMarker;
    element.style.backgroundImage = `url(${baraIcon.src})`;
    element.style.backgroundRepeat = 'no-repeat';
    element.style.backgroundPosition = 'center';
    element.style.backgroundSize = 'cover';

    element.style.width = '40px';
    element.style.height = '40px';
    return element;
  };

  useEffect(() => {
    places.forEach((place) => {
      const customMarkerElement = createCustomMarkerElement();

      if (customMarkerElement) {
        new mapboxgl.Marker({
          element: customMarkerElement,
        })
          .setLngLat([
            place.features[0].properties.coordinates.longitude,
            place.features[0].properties.coordinates.latitude,
          ])
          .addTo(map.current!);
      }
    });
  }, [places]);

  return (
    <div ref={mapContainer} className={`${mapStyles.main} map-container`} />
  );
};

export default MapComponent;
