'use client';
import React, { useEffect } from 'react';
import detailPageStyles from './detailPage.module.scss';
import Button from '@/components/Button';
import { useRouter } from 'next/navigation';
import Loader from '@/components/Loader';
import { useModalStore } from '@/utils/store/modalStore';

interface DetailPageLayoutProps {
  headline: string | undefined;
  coordinates: [number, number] | undefined;
  address: string | undefined;
  date: string | undefined;
  description: string | undefined;
}

const DetailPageLayout: React.FC<DetailPageLayoutProps> = ({
  headline,
  address,
  coordinates,
  date,
  description,
}) => {
  const router = useRouter();
  const openModal = useModalStore((state) => state.openModal);
  return (
    <div className={detailPageStyles.main}>
      <div className={detailPageStyles.pageInner}>
        <h1>{headline}</h1>
        <h2>{description}</h2>
        <h2>{address}</h2>
        <h2>{date}</h2>
      </div>
    </div>
  );
};

export default DetailPageLayout;
