import { MenuElementProps } from '@/utils/menu';
import menuElementStyles from './menuElement.module.scss';
import React, { useEffect } from 'react';
import Icon from '../Icon';
import Button from '../Button';
import Loader from '../Loader';
import { useMapStore } from '@/utils/store/mapStore';

const DesktopCard: React.FC<MenuElementProps> = ({ icon, name }) => {
  const { getData, places } = useMapStore();
  useEffect(() => {
    getData(`${process.env.NEXT_PUBLIC_LOCALHOST}/getPlaces`);
  }, []);
  return (
    <div className={menuElementStyles.mainDesktop}>
      <div className={menuElementStyles.contentWrapper}>
        <div className={menuElementStyles.iconWrapper}>
          <Icon width={80} height={80} src={icon} />
        </div>
        <div className={menuElementStyles.textWrapper}>
          <span className={menuElementStyles.elementName}>{`${name}`}</span>
          {places ? (
            <span
              className={menuElementStyles.elementName}
            >{`(${places.length})`}</span>
          ) : (
            <Loader size={20} />
          )}
        </div>
        <Button text={`Open listings`} type={`terciary`} onClick={() => null} />
      </div>
    </div>
  );
};

export default DesktopCard;
