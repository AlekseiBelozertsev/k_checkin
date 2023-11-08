'use client';
import React from 'react';
import detailPageStyles from './detailPage.module.scss';
import Button from '@/components/Button';
import { useRouter } from 'next/navigation';
import Loader from '@/components/Loader';

interface DetailPageLayoutProps {
  headline: string;
  isConnected: boolean;
}

const DetailPageLayout: React.FC<DetailPageLayoutProps> = ({
  headline,
  isConnected,
}) => {
  const router = useRouter();
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
            <Loader size={64} />
          </div>
        </>
      )}
    </div>
  );
};

export default DetailPageLayout;
