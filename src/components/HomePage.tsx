import React from 'react';
import Button from '@/components/Button';
import Header from '@/components/Header';
import ListComponent from '@/components/List';
import { useModalStore } from '@/utils/store/modalStore';
import { useMapStore } from '@/utils/store/mapStore';
import { useDrawerStore } from '@/utils/store/drawerStore';
import { animated, useSpring } from '@react-spring/web';
import homePageStyles from '../components/styles/homePage.module.scss';
import MenuElement from './mobile/MenuElement';
import listingsIcon from '../../public/icons/ufo.svg';
import { menu } from '@/utils/menu';

type HomePageProps = {
  isMobile: boolean;
};

const HomePage: React.FC<HomePageProps> = ({ isMobile }) => {
  const { openModal } = useModalStore();

  return (
    <div className={homePageStyles.main}>
      <div className={homePageStyles.pageInner}>
        <Header />
        {menu.map((menuItem, i) => {
          return (
            <MenuElement
              isDynamic
              href={menuItem.href}
              name={menuItem.name}
              description={menuItem.description}
              icon={menuItem.icon}
              key={i}
            />
          );
        })}
      </div>
      <div className={homePageStyles.buttonsWrapper}>
        <Button
          type={'primary'}
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

export default HomePage;
