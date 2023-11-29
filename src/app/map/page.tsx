'use client';
import React, { useEffect } from 'react';
import MapComponent from '../../components/Map';
import mapStyles from '../../components/Map/map.module.scss';
import Filters from '@/components/Filters/index';
import { mapFilters, useMapStore } from '@/utils/store/mapStore';
import ModalMainComponent from '@/components/modals';
import { useMediaQuery } from 'react-responsive';
import { usePlaceStore } from '@/utils/store/placeStore';
const MapPage = () => {
  const { currentCenter, zoom, onMapLoad, isMapLoaded } = useMapStore();
  const { getData, places } = usePlaceStore();
  const isMobile = useMediaQuery({
    query: `(max-width: 768px)`,
  });
  useEffect(() => {
    getData(`${process.env.NEXT_PUBLIC_LOCALHOST}/getPlaces`);
  }, []);
  return (
    <div className={mapStyles.mapPage}>
      <ModalMainComponent isMobile={isMobile} />
      <Filters items={mapFilters} />
      <MapComponent
        currentCenter={currentCenter}
        isMapLoaded={!!isMapLoaded}
        onMapLoad={onMapLoad}
        places={places}
        zoom={zoom}
      />
    </div>
  );
};

export default MapPage;
