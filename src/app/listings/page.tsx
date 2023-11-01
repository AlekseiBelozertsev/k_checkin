'use client';
import React, { useEffect, useState } from 'react';
import { Place, useMapStore } from '@/utils/store/mapStore';
import PageLayout from '@/ui/pages/Page';
import { useMediaQuery } from 'react-responsive';

const Listings = () => {
  const { getData, places } = useMapStore();
  useEffect(() => {
    getData(`${process.env.NEXT_PUBLIC_LOCALHOST}/getPlaces`)
  }, []);
  const isMobile = useMediaQuery({
    query: `(max-width: 768px)`,
  });
  return (
    <PageLayout places={places} headline={'All places'} isMobile={isMobile} />
  );
};

export default Listings;
