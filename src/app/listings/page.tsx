'use client';
import React, { useEffect, useState } from 'react';
import { Place, useMapStore } from '@/utils/store/mapStore';
import PageLayout from '@/ui/pages/Page';
import { useMediaQuery } from 'react-responsive';
import { useFetch } from '@/utils/hooks/useGetData';

const Listings = () => {
  const data = useFetch(`${process.env.NEXT_PUBLIC_LOCALHOST}/getPlaces`);
  const getPlaces = useMapStore((state) => state.getPlaces);
  const places = useMapStore((state) => state.places);
  useEffect(() => {
    if (data) {
      getPlaces(data);
    }
  }, [data]);
  const isMobile = useMediaQuery({
    query: `(max-width: 768px)`,
  });
  return (
    <PageLayout places={places} headline={'All places'} isMobile={isMobile} />
  );
};

export default Listings;
