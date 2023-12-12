'use client';
import React, { useEffect } from 'react';
import detailPageStyles from './detailPage.module.scss';
import Button from '@/components/Button';
import { useRouter } from 'next/navigation';
import Loader from '@/components/Loader';
import { useModalStore } from '@/utils/store/modalStore';
import { add } from 'cypress/types/lodash';

interface DetailPageLayoutProps {
  headline: string | undefined;
  country: string | undefined;
  coordinates: [number, number] | undefined;
  address: string | undefined;
  date: string | undefined;
  isUpdated: boolean | undefined;
  description: string | undefined;
}

const DetailPageLayout: React.FC<DetailPageLayoutProps> = ({
  headline,
  address,
  coordinates,
  country,
  isUpdated,
  date,
  description,
}) => {
  const router = useRouter();
  const openModal = useModalStore((state) => state.openModal);
  return (
    <div className={detailPageStyles.main}>
      <div className={detailPageStyles.pageInner}>
        <h1>{headline}</h1>
        {
          isUpdated && description ? (
            <div className={detailPageStyles.content}>
              <p>{description}</p>
              <p>{`${date}, ${address}, ${country}`}</p>
              <div className={detailPageStyles.divider} />
            </div>
          ) : (
            <div className={detailPageStyles.emptyPage}>
              <h2>The place was not yet described.</h2>
              <Button text={'Write description'} type={'primary'} onClick={() => openModal("add-place-info-modal")} />
            </div>
          )
        }
      </div>
    </div>
  );
};

export default DetailPageLayout;
