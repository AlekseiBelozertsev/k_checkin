'use-client';
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import mapStyles from './styles/map.module.scss';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useMapStore } from '@/utils/store/mapStore';
import baraIcon from '../../public/icons/baraIcon.svg';
import { useRouter } from 'next/navigation';

mapboxgl.accessToken = `${process.env.NEXT_PUBLIC_MAPBOX_API_KEY}`;

const MapComponent = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const router = useRouter();

  // Stores
  const { zoom, currentCenter, places, onMapLoad, isMapLoaded } = useMapStore();

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
      map.current.on('load', () => {
        onMapLoad();
      });
    }
  }, [currentCenter, zoom]);

  const createCustomMarkerElement = () => {
    if (typeof window === 'undefined') {
      return null;
    }
    if (typeof document !== 'undefined') {
      const element = document.createElement('div');
      element.className = mapStyles.customMarker;
      element.style.backgroundImage = `url(${baraIcon.src})`;
      element.style.backgroundRepeat = 'no-repeat';
      element.style.backgroundPosition = 'center';
      element.style.backgroundSize = 'cover';
      element.style.width = '40px';
      element.style.height = '40px';
      return element;
    }
  };

  useEffect(() => {
    places.forEach((place) => {
      const slug = place.features[0].properties.name
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/\s+/g, '-')
        .toLowerCase();
      const customMarkerElement = createCustomMarkerElement();
      if (customMarkerElement) {
        const marker = new mapboxgl.Marker({
          element: customMarkerElement,
        })
          .setLngLat([
            place.features[0].properties.coordinates.longitude,
            place.features[0].properties.coordinates.latitude,
          ])
          .addTo(map.current!);
        marker.getElement().addEventListener('click', () => {
          // alert(`clicked on ${place.features[0].properties.name}`);
          router.push(`/listings/${slug}`);
        });
      }
    });
  }, [places]);

  return (
    <>
      {!isMapLoaded && (
        <div className={mapStyles.plug}>
          <div className={mapStyles.spinner} />
          {/* <p>{`Wait until map fully loads. :)`}</p> */}
        </div>
      )}
      <div
        ref={mapContainer}
        className={`${
          isMapLoaded ? mapStyles.main : mapStyles.notLoaded
        } map-container`}
      />
    </>
  );
};

export default MapComponent;
