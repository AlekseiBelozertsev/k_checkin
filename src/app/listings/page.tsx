'use client';
import React from 'react';
import { useMapStore } from '@/utils/store/mapStore';
import PageLayout from '@/components/PageLayout';
import { useMediaQuery } from 'react-responsive';

const Listings = () => {
  const places = useMapStore((state) => state.places);
  const isMobile = useMediaQuery({
    query: `(max-width: 768px)`,
  });
  return (
    <PageLayout places={places} headline={'All places'} isMobile={isMobile} />
  );
};

export default Listings;
