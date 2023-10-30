import { MenuElementProps } from '@/utils/menu';
import menuElementStyles from './menuElement.module.scss';
import React from 'react';
import Icon from '../Icon';
import Button from '../Button';
import { useFetch } from '@/utils/hooks/useGetData';
import Loader from '../Loader';

const DesktopCard: React.FC<MenuElementProps> = ({ icon, name }) => {
  const data = useFetch(`${process.env.NEXT_PUBLIC_LOCALHOST}/getPlaces`);

  return (
    <div className={menuElementStyles.mainDesktop}>
      <div className={menuElementStyles.contentWrapper}>
        <div className={menuElementStyles.iconWrapper}>
          <Icon width={80} height={80} src={icon} />
        </div>
        <div className={menuElementStyles.textWrapper}>
          <span className={menuElementStyles.elementName}>{`${name}`}</span>
          {data ? (
            <span
              className={menuElementStyles.elementName}
            >{`(${data.length})`}</span>
          ) : (
            <Loader />
          )}
        </div>
        <Button text={`Open listings`} type={`terciary`} onClick={() => null} />
      </div>
    </div>
  );
};

export default DesktopCard;
