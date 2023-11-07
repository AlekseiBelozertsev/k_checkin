'use-client';
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import mapStyles from './map.module.scss';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Place, useMapStore } from '@/utils/store/mapStore';
import baraIcon from '../../../public/icons/baraIcon.svg';
import { useRouter } from 'next/navigation';
import { generateSlug } from '@/utils/generateSlug';

mapboxgl.accessToken = `${process.env.NEXT_PUBLIC_MAPBOX_API_KEY}`;

type MapProps = {
  zoom: number;
  currentCenter: [number, number];
  places: Place[];
  onMapLoad: () => void;
  isMapLoaded: boolean;
}

const MapComponent: React.FC<MapProps> = ({
  currentCenter,
  places,
  zoom,
  onMapLoad,
  isMapLoaded
}) => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const router = useRouter();

  // const { zoom, currentCenter, places, onMapLoad, isMapLoaded, getData } = useMapStore();


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
        if (places.length !== 0) {
          onMapLoad();
        }
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
    console.log('initial render')
    places.forEach((place) => {
      console.log('rendered markers')
      const slug = generateSlug(place.name);
      const customMarkerElement = createCustomMarkerElement();
      if (customMarkerElement) {
        const marker = new mapboxgl.Marker({ element: customMarkerElement })
          .setLngLat([place.coordinates[1], place.coordinates[0]])
          .addTo(map.current!);
        marker.getElement().addEventListener('click', () => {
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
