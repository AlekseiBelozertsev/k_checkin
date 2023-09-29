import myListingsIcon from '../../public/icons/ufo.svg';

export type MenuElementProps = {
  href: string;
  name: string;
  icon: string;
  description: string;
  isDynamic: boolean;
};

export const menu: MenuElementProps[] = [
  {
    href: '/listings',
    name: 'My listings',
    icon: myListingsIcon,
    description: 'That is listings',
    isDynamic: true,
  },
];
