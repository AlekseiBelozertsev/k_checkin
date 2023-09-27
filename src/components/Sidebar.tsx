import React from 'react';
import Button from '@/components/Button';
import Header from '@/components/Header';
import ListComponent from '@/components/List';
import { useModalStore } from '@/utils/store/modalStore';
import { useMapStore } from '@/utils/store/mapStore';
import { useDrawerStore } from '@/utils/store/drawerStore';
import { animated, useSpring } from '@react-spring/web';
import sidebarStyles from '../components/styles/sidebar.module.scss';

type SidebarProps = {
  isMobile: boolean;
};

const Sidebar: React.FC<SidebarProps> = ({ isMobile }) => {
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
    <animated.div style={props} className={sidebarStyles.main}>
      <div
        onClick={() => isMobile && handleDrawerClose()}
        className={sidebarStyles.sidebarInner}
      >
        <Header />
        <div className={sidebarStyles.rightColumn}>
          <ListComponent
            isMobile={isMobile}
            modalOpen={() => openModal('show-all-modal')}
            elements={places}
          />
        </div>
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
      {isMobile && (
        <button
          className={sidebarStyles.drawerToggler}
          onClick={() => handleDrawerOpen()}
        />
      )}
    </animated.div>
  );
};

export default Sidebar;
