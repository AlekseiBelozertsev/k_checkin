'use client';
import React from 'react';
import MapComponent from '../../components/Map';
import mapStyles from '../../components/styles/map.module.scss';
import Filters from '@/components/Filters';
import { mapFilters } from '@/utils/store/mapStore';
const MapPage = () => {
  return (
    <div className={mapStyles.mapPage}>
      <MapComponent />
      <div className={mapStyles.mapFiltersWrapper}>
        <Filters items={mapFilters} />
      </div>
    </div>
  );
};

export default MapPage;
