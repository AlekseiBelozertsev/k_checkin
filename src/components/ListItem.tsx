import React from 'react';

import listItemStyles from './styles/listItem.module.scss';

type ListItemProps = {
  content: string;
};

const ListItem: React.FC<ListItemProps> = ({ content }) => {
  return <div className={listItemStyles.main}>{content}</div>;
};

export default ListItem;
