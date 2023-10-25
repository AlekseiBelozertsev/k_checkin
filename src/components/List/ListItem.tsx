import React from 'react';

import listItemStyles from './styles/listItem.module.scss';
import Link from 'next/link';

type ListItemProps = {
  headline: string;
  subline: string;
  onClick: () => void;
  href: string;
};

const ListItem: React.FC<ListItemProps> = ({
  headline,
  subline,
  onClick,
  href,
}) => {
  return (
    <Link href={href}>
      <div onClick={onClick} className={listItemStyles.main}>
        <span className={listItemStyles.headline}>{headline}</span>
        <span className={listItemStyles.subtitle}>{subline}</span>
      </div>
    </Link>
  );
};

export default ListItem;
