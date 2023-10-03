'use client';
import React from 'react';
import pageStyles from '../../src/app/styles/page.module.scss';
import List from '@/components/List';
import { useModalStore } from '@/utils/store/modalStore';
import Button from '@/components/Button';
import ModalMainComponent from '@/components/ModalMainComponent';
import { Place } from '@/utils/mocks/places';

interface PageLayoutProps {
  places: Place[];
  headline: string;
  isMobile: boolean;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  places,
  headline,
  isMobile,
}) => {
  // const places = useMapStore((state) => state.places);
  const { openModal } = useModalStore();

  return (
    
      <div className={pageStyles.main}>
        <ModalMainComponent isMobile={isMobile} />

        <div className={pageStyles.pageInner}>
          <h1>{headline}</h1>
          <div className={pageStyles.listWrapper}>
            <List elements={places} isMobile={isMobile} />
          </div>
        </div>
        <div className={pageStyles.buttonsWrapper}>
          <Button
            isMobileOnly={false}
            text={`Add location`}
            onClick={() => openModal('add-place-modal')}
          />
          {/* {places.length ? (
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

export default PageLayout;
