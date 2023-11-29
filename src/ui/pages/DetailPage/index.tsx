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
  isConnected: boolean;
  date: string | undefined;
  description: string | undefined;
  
}

const DetailPageLayout: React.FC<DetailPageLayoutProps> = ({
  headline,
  isConnected,
  address,
  coordinates,
}) => {
  const router = useRouter();
  const openModal = useModalStore((state) => state.openModal);
  useEffect(() => {
    openModal('add-place-info-modal');
  }, []);
  return (
    <div className={detailPageStyles.main}>
      {isConnected ? (
        <>
          <div className={detailPageStyles.pageInner}>
            <h1>{headline}</h1>
          </div>
        </>
      ) : (
        <>
          <div className={detailPageStyles.loaderWrapper}>
            {/* <Loader size={64} /> */}
            <h1>{`Page not found. :(`}</h1>
            <Button
              text="Go back"
              type="primary"
              onClick={() => router.back()}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default DetailPageLayout;
