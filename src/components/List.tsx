import { Place } from '@/utils/mocks/places';
import React from 'react';
import listStyles from './styles/list.module.scss';
import ListItem from './ListItem';
import ShowAll from './ShowAll';
import { useMapStore } from '@/utils/store/mapStore';

type ListProps = {
  elements: Place[];
};

type ListComponentProps = {
  modalOpen: () => void;
  elements: Place[];
};

const List: React.FC<ListProps> = ({ elements }) => {
  const { setCurrentCenter, currentCenter } = useMapStore();
  return (
    <div className={listStyles.main}>
      {elements.slice(-4).map((element, i) => {
        return (
          <ListItem
            onClick={() => {
              setCurrentCenter(element);
              console.log(`current center is now ${currentCenter}`);
            }}
            subline={element.features[0].properties.place_formatted}
            headline={element.features[0].properties.name}
            key={i}
          />
        );
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
      {!elements.length ? (
        <div className={listStyles.innerWrapperEmptyList}>
          <h2 className={listStyles.headline}>
            {`No places listed. Yet...`} <br /> {`(☉_☉)`}
          </h2>
          <List elements={elements} />
        </div>
      ) : (
        <>
          <div className={listStyles.innerWrapper}>
            <h2 className={listStyles.headline}>{`Recently visited`}</h2>
            <List elements={elements} />
          </div>
          {elements.length >= 4 && <ShowAll onClick={() => modalOpen()} />}
        </>
      )}
    </>
  );
};

export default ListComponent;
