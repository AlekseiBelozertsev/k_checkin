'use client';
import React from 'react';
import pageStyles from '../styles/page.module.scss';
import List from '@/components/List';
import { places } from '@/utils/mocks/places';
import { useModalStore } from '@/utils/store/modalStore';
import Button from '@/components/Button';
import { useMapStore } from '@/utils/store/mapStore';

const Listings = () => {
  const places = useMapStore((state) => state.places);
  const { openModal } = useModalStore();
  return (
    <div className={pageStyles.main}>
      <div className={pageStyles.pageInner}>
        <h1>All places</h1>
        <div style={{width: `100%`, height: `100%`, position: `relative`}}>
          <List
            elements={places}
            isMobile={true}
            modalOpen={() => openModal('show-all-modal')}
          />
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

export default Listings;
