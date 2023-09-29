import React from 'react';
import Button from '@/components/Button';
import Header from '@/components/Header';
import ListComponent from '@/components/List';
import { useModalStore } from '@/utils/store/modalStore';
import { useMapStore } from '@/utils/store/mapStore';
import { useDrawerStore } from '@/utils/store/drawerStore';
import { animated, useSpring } from '@react-spring/web';
import sidebarStyles from '../components/styles/sidebar.module.scss';
import MenuElement from './mobile/MenuElement';
import listingsIcon from '../../public/icons/ufo.svg';
import { menu } from '@/utils/menu';

type SidebarProps = {
  isMobile: boolean;
};

const HomeComponent: React.FC<SidebarProps> = ({ isMobile }) => {
  const places = useMapStore((state) => state.places);
  const { openModal } = useModalStore();
  const { handleDrawerClose, handleDrawerOpen, customStyles } =
    useDrawerStore();
  const props = useSpring({
    ...customStyles,
    config: {
      duration: 200,
    },
  });

  return (
    <div className={sidebarStyles.main}>
      <div
        onClick={() => isMobile && handleDrawerClose()}
        className={sidebarStyles.sidebarInner}
      >
        <Header />
        {menu.map((menuItem) => {
          return (
            <MenuElement
              isDynamic
              href={menuItem.href}
              name={menuItem.name}
              description={menuItem.description}
              icon={menuItem.icon}
            />
          );
        })}
      </div>
      <div className={sidebarStyles.buttonsWrapper}>
        <Button
          isMobileOnly={false}
          text={`Add location`}
          onClick={() => openModal('add-place-modal')}
        />
        {places.length ? (
          <Button
            isMobileOnly
            text={`To map`}
            onClick={() => handleDrawerClose()}
          />
        ) : null}
      </div>
    </div>
  );
};

export default HomeComponent;
