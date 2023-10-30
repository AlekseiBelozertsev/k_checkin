import { MenuElementProps } from '@/utils/menu';
import menuElementStyles from './menuElement.module.scss';
import React from 'react';
import Icon from '../Icon';
import { useMapStore } from '@/utils/store/mapStore';
import Button from '../Button';

const DesktopCard: React.FC<MenuElementProps> = ({ icon, name }) => {
  const places = useMapStore((store) => store.places);
  return (
    <div className={menuElementStyles.mainDesktop}>
      <div className={menuElementStyles.contentWrapper}>
        <div className={menuElementStyles.iconWrapper}>
          <Icon width={80} height={80} src={icon} />
        </div>
        <span
          className={menuElementStyles.elementName}
        >{`${name} (${places.length})`}</span>
        <Button text={`Open listings`} type={`primary`} onClick={() => null} />
      </div>
    </div>
  );
};

export default DesktopCard;
