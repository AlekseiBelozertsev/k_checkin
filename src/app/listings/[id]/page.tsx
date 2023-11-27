'use client';
import ModalMainComponent from '@/components/modals';
import DetailPageLayout from '@/ui/pages/DetailPage';
import { Place, useMapStore } from '@/utils/store/mapStore';
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export const generateStaticParams = async () => {
  try {
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_LOCALHOST}/getPlaces`,
    ).then((res) => res.json());
    const parsedData = JSON.parse(data);
    return parsedData.map((place: Place) => ({
      id: place.id,
    }));
  } catch (e) {
    const data = localStorage.getItem('places');
    if (data) {
      const parsedData = JSON.parse(data);
      return parsedData.map((place: Place) => ({
        id: place.id,
      }));
    }
  }
};

const getPlaceById = (id: string) => {
  const data = localStorage.getItem('places');
  if (data) {
    const parsedData = JSON.parse(data);
    const place = parsedData.find((place: Place) => place.id === id);
    return place;
  }
};

const ListingPage = ({ params }: { params: { id: string } }) => {
  const [page, setPage] = useState<Place>();
  useEffect(() => {
    const place: Place = getPlaceById(params.id);
    setPage(place);
  }, []);
  const isMobile = useMediaQuery({
    query: `(max-width: 768px)`,
  });
  return (
    <>
      <ModalMainComponent isMobile={isMobile} />
      <DetailPageLayout
        address={page?.address}
        coordinates={page?.coordinates}
        headline={page?.name}
        isConnected={!!page}
      />
    </>
  );
};

export default ListingPage;
