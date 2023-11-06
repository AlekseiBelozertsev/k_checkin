import React from 'react';
import listItemStyles from './styles/listItem.module.scss';
import Link from 'next/link';
import deleteIcon from '../../../public/icons/deleteIcon.svg';
import Icon from '../Icon';

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
        <div className={listItemStyles.contentWrapper}>
          <span className={listItemStyles.headline}>{headline}</span>
          <span className={listItemStyles.subtitle}>{subline}</span>
        </div>
        <button className={listItemStyles.button}>
          <Icon height={32} width={32} src={deleteIcon} />
        </button>
      </div>
    </Link>
  );
};

export default ListItem;
