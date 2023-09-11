import React from 'react';

import listItemStyles from './styles/listItem.module.scss';

type ListItemProps = {
  headline: string;
  subline: string;
  onClick: () => void;
};

const ListItem: React.FC<ListItemProps> = ({ headline, subline, onClick }) => {
  return (
    <div onClick={onClick} className={listItemStyles.main}>
      <span className={listItemStyles.text}>{headline}</span>
      <span>{subline}</span>
    </div>
  );
};

export default ListItem;
