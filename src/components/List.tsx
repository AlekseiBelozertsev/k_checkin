import { Place } from '@/utils/mocks/places';
import React from 'react';
import listStyles from './styles/list.module.scss';
import ListItem from './ListItem';

type ListProps = {
  elements: Place[];
};

const List: React.FC<ListProps> = ({ elements }) => {
  return (
    <div className={listStyles.main}>
      {elements.map((element, i) => {
        return <ListItem content={element.town} key={i} />;
      })}
    </div>
  );
};

export default List;
