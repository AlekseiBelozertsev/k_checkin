'use client';
import ModalMainComponent from '@/components/modals';
import DetailPageLayout from '@/ui/pages/DetailPage';
import { Place, usePlaceStore } from '@/utils/store/placeStore';
import { useModalStore } from '@/utils/store/modalStore';
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
  const { openModal } = useModalStore();
  const { getCurrentPageID, places } = usePlaceStore();

  const [page, setPage] = useState<Place>();

  useEffect(() => {
    const place: Place = getPlaceById(params.id);
    setPage(place);
    getCurrentPageID(place.id);

    if (!place.isInfoAdded) {
      openModal('add-place-info-modal');
    }
  }, [places]);

  const isMobile = useMediaQuery({
    query: `(max-width: 768px)`,
  });

  return (
    <>
      <ModalMainComponent isMobile={isMobile} />
      <DetailPageLayout
        date={page?.tripDate}
        description={page?.description}
        address={page?.address}
        coordinates={page?.coordinates}
        headline={page?.name}
        isConnected={!!page}
      />
    </>
  );
};

export default ListingPage;
