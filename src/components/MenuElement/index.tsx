import { MenuElementProps } from '@/utils/menu';
import menuElementStyles from './menuElement.module.scss';
import Link from 'next/link';
import React from 'react';
import Icon from '../Icon';
import DesktopCard from './DesktopCard';

type isMobile = {
  isMobile: boolean;
};

const MenuElement: React.FC<MenuElementProps & isMobile> = ({
  href,
  name,
  icon,
  description,
  isMobile,
}) => {
  return (
    <Link href={href}>
      {!isMobile ? (
        <DesktopCard
          href={href}
          name={name}
          icon={icon}
          description={description}
        />
      ) : (
        <div className={menuElementStyles.main}>
          <Icon width={80} height={80} src={icon} />
          <div className={menuElementStyles.text}>
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
        </div>
      )}
    </Link>
  );
};

export default MenuElement;
