import { MenuElementProps } from '@/utils/menu';
import Link from 'next/link';
import React from 'react';
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
      <DesktopCard
        href={href}
        name={name}
        icon={icon}
        description={description}
      />
    </Link>
  );
};

export default MenuElement;
