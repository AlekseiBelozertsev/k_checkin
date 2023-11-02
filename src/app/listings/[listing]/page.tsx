'use client';
import DetailPageLayout from '@/ui/pages/DetailPage';
import { useMapStore } from '@/utils/store/mapStore';
import React, { useEffect } from 'react';

//write logic for error - should display something went wrong and back button (see figma)

const ListingPage: React.FC = () => {
  const { places, getData } = useMapStore();
  useEffect(() => {
    getData(`${process.env.NEXT_PUBLIC_LOCALHOST}/getPlaces`)
  }, [])
  const generateStaticParams = () => {
    return places.map((place) => ({
      slug: place.name.replace(/\s+/g, '-').toLowerCase(),
      headline: place.name,
      //here comes te txt
    }));
  };
  const place = generateStaticParams()[0];
  return (
    <DetailPageLayout
      headline={place && place.headline}
      isConnected={!!place}
    />
  );
};

export default ListingPage;
