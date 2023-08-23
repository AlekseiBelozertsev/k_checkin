import { Place } from '@/utils/mocks/places';
import React from 'react';
import listStyles from './styles/list.module.scss';
import ListItem from './ListItem';
import ShowAll from './ShowAll';

type ListProps = {
  elements: Place[];
};

type ListComponentProps = {
  modalOpen: () => void;
  elements: Place[];
};

const List: React.FC<ListProps> = ({ elements }) => {
  return (
    <div className={listStyles.main}>
      {elements.slice(-4).map((element, i) => {
        return <ListItem content={element.town} key={i} />;
      })}
    </div>
  );
};

const ListComponent: React.FC<ListComponentProps> = ({
  modalOpen,
  elements,
}) => {
  return (
    <>
      <div className={listStyles.innerWrapper}>
        <h2 className={listStyles.headline}>{`Recently visited`}</h2>
        <List elements={elements} />
      </div>
      {elements.length >= 5 && <ShowAll onClick={() => modalOpen()} />}
    </>
  );
};

export default ListComponent;
