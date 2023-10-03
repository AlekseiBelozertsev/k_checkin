import { MenuElementProps } from '@/utils/menu';
import menuElementStyles from './styles/menuElement.module.scss';
import Link from 'next/link';
import React from 'react';
import Icon from '../Icon';

const MenuElement: React.FC<MenuElementProps> = ({
  href,
  name,
  icon,
  description,
  isDynamic,
}) => {
  return (
    <Link href={href}>
      <div className={menuElementStyles.main}>
        <Icon width={80} height={80} src={icon} />
        <div className={menuElementStyles.text}>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default MenuElement;
