import { Place, recentPlaces } from '@/utils/mocks/places';
import React from 'react';
import listStyles from './styles/list.module.scss';
import ListItem from './ListItem';
import ShowAll from './ShowAll';

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

const ListComponent = () => {
  return (
    <>
      <div className={listStyles.innerWrapper}>
        <h2 className={listStyles.headline}>{`Recently visited`}</h2>
        <List elements={recentPlaces} />
      </div>
      {
        recentPlaces.length >= 5 && <ShowAll onClick={() => console.log('')} />
      }
    </>
  );
};

export default ListComponent;
