'use client';
import DetailPageLayout from '@/components/DetailPageLayout';
import { useMapStore } from '@/utils/store/mapStore';
import React from 'react';

//write logic for error - should display something went wrong and back button (see figma)

const ListingPage: React.FC = () => {
  const { places } = useMapStore();
  const generateStaticParams = () => {
    return places.map((place) => ({
      slug: place.features[0].properties.name
        .replace(/\s+/g, '-')
        .toLowerCase(),
      headline: place.features[0].properties.name,
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
