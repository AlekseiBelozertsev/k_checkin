'use client';
import React from 'react';
import detailPageStyles from '../../src/app/styles/detailPage.module.scss';
import Button from '@/components/Button';

interface DetailPageLayoutProps {
  headline: string;
}

const DetailPageLayout: React.FC<DetailPageLayoutProps> = ({ headline }) => {
  return (
    <div className={detailPageStyles.main}>
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
    </div>
  );
};

export default DetailPageLayout;
