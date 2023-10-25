'use client';
import React from 'react';
import MapComponent from '../../components/Map';
import mapStyles from '../../components/Map/map.module.scss';
import Filters from '@/components/Filters/index';
import { mapFilters } from '@/utils/store/mapStore';
const MapPage = () => {
  return (
    <div className={mapStyles.mapPage}>
      <Filters items={mapFilters} />
      <MapComponent />
    </div>
  );
};

export default MapPage;
