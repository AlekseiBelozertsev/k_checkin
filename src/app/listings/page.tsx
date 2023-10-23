'use client';
import React, { useEffect, useState } from 'react';
import { useMapStore } from '@/utils/store/mapStore';
import PageLayout from '@/components/PageLayout';
import { useMediaQuery } from 'react-responsive';
import { Place } from '@/utils/mocks/places';

const Listings = () => {
  // const places = useMapStore((state) => state.places);
  const [places, setPlaces] = useState<Place[]>([]);
  const isMobile = useMediaQuery({
    query: `(max-width: 768px)`,
  });
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:3030/getPlaces`);
      const result = await response.json();
      setPlaces(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    //@ts-ignore
    <PageLayout places={places} headline={'All places'} isMobile={isMobile} />
  );
};

export default Listings;
