'use client';
import React from 'react';
import homePageStyles from './page.module.scss';
import List from '@/components/List';
import { useModalStore } from '@/utils/store/modalStore';
import Button from '@/components/Button';
import ModalMainComponent from '@/components/modals';
import { Place } from '@/utils/mocks/places';
import Header from '@/components/Header';

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

  // return (
  //   <div className={pageStyles.main}>
  //     <ModalMainComponent isMobile={isMobile} />

  //     <div className={pageStyles.pageInner}>
  //       <h1>{headline}</h1>
  //       <div className={pageStyles.listWrapper}>
  //         <List elements={places} isMobile={isMobile} />
  //       </div>
  //     </div>
  //     <div className={pageStyles.buttonsWrapper}>
  //       <Button
  //         type={'primary'}
  //         text={`Add location`}
  //         onClick={() => openModal('add-place-modal')}
  //       />
  //     </div>
  //   </div>
  // );
  return (
    <div className={homePageStyles.main}>
      <div className={homePageStyles.pageInner}>
        <Header />
        <div
          className={
            !isMobile
              ? homePageStyles.listWrapperDesktop
              : homePageStyles.listWrapperMobile
          }
        >
          <List elements={places} isMobile={isMobile} />
        </div>
      </div>
      <div
        className={
          !isMobile
            ? homePageStyles.buttonsWrapperDesktop
            : homePageStyles.buttonsWrapperMobile
        }
      >
        <Button
          type={'primary'}
          text={`Add location`}
          onClick={() => openModal('add-place-modal')}
        />
      </div>
    </div>
  );
};

export default PageLayout;