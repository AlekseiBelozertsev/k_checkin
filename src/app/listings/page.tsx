'use client';
import React, { useEffect, useState } from 'react';
import { usePlaceStore } from '@/utils/store/placeStore';
import PageLayout from '@/ui/pages/Page';
import { useMediaQuery } from 'react-responsive';

const Listings = () => {
  const { getData, places } = usePlaceStore();
  useEffect(() => {
    getData(`${process.env.NEXT_PUBLIC_LOCALHOST}/getPlaces`);
  }, [getData]);
  const isMobile = useMediaQuery({
    query: `(max-width: 768px)`,
  });
  return (
    <PageLayout
      subtitle={''}
      places={places}
      headline={'Places listed:'}
      isMobile={isMobile}
    />
  );
};

export default Listings;
