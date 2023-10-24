import React from 'react';
import Button from '@/components/Button';
import Header from '@/components/Header';
import { useModalStore } from '@/utils/store/modalStore';
import homePageStyles from '../components/styles/homePage.module.scss';
import MenuElement from './mobile/MenuElement';
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
      <div className={isMobile ? homePageStyles.buttonsWrapperMobile : homePageStyles.buttonsWrapperDesktop}>
        <Button
          type={'primary'}
          text={`Add location`}
          onClick={() => openModal('add-place-modal')}
        />
      </div>
    </div>
  );
};

export default HomePage;
