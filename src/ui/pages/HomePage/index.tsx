import React from 'react';
import Button from '@/components/Button';
import Header from '@/components/Header';
import { useModalStore } from '@/utils/store/modalStore';
import homePageStyles from './homePage.module.scss';
import MenuElement from '@/components/Cards';
import { menu } from '@/utils/menu';

type HomePageProps = {
  isMobile: boolean;
  headline: string;
  subtitle: string;
};

const HomePage: React.FC<HomePageProps> = ({
  isMobile,
  headline,
  subtitle,
}) => {
  const { openModal } = useModalStore();

  return (
    <div className={homePageStyles.main}>
      <div className={homePageStyles.pageInner}>
        <Header headline={headline} subtitle={subtitle} />
        <div className={homePageStyles.menuWrapper}>
          {menu.map((menuItem, i) => {
            return (
              <MenuElement
                isMobile={isMobile}
                href={menuItem.href}
                name={menuItem.name}
                description={menuItem.description}
                icon={menuItem.icon}
                key={i}
              />
            );
          })}
        </div>
      </div>
      <div className={homePageStyles.buttonsWrapper}>
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
