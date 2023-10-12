'use client';
import React from 'react';
import detailPageStyles from '../../src/app/styles/detailPage.module.scss';
import Button from '@/components/Button';
import { useRouter } from 'next/navigation';

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
          <div className={detailPageStyles.buttonsWrapper}>
            {/* <Button
                isMobileOnly={false}
                text={`Add location`}
                onClick={() => openModal('add-place-modal')}
              />
              {places.length ? (
                  <Button
                    isMobileOnly
                    text={`To map`}
                    onClick={() => null}
                  />
                ) : null} */}
          </div>
        </>
      ) : (
        <>
          <div className={detailPageStyles.pageInner}>
            <h1>{`Couldn't fetch. 🤔`}</h1>
          </div>
          <div className={detailPageStyles.buttonsWrapper}>
            <Button onClick={() => router.push('/')} text={`Back home`} type={'secondary'} />
          </div>
        </>
      )}
    </div>
  );
};

export default DetailPageLayout;
