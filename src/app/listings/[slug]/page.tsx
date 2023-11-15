'use client';
import DetailPageLayout from '@/ui/pages/DetailPage';
import { generateSlug } from '@/utils/generateSlug';
import { Place, useMapStore } from '@/utils/store/mapStore';
import React, { useEffect } from 'react';

export const generateStaticParams = async () => {
  try {
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_LOCALHOST}/getPlaces`,
    ).then((res) => res.json());
    const parsedData = data && JSON.parse(data);
    return parsedData.map((place: Place) => ({
      slug: generateSlug(place.name),
    }));
  } catch (e) {
    const data = localStorage.getItem('places');
    const parsedData = data && JSON.parse(data);
    return parsedData.map((place: Place) => ({
      slug: generateSlug(place.name),
    }));
  }
};

const ListingPage = ({ params }: { params: { slug: string } }) => {
  console.log(params.slug);
  return <DetailPageLayout headline={params.slug} isConnected={true} />;
};

export default ListingPage;
