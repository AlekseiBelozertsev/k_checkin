import React from 'react';
import listStyles from './styles/list.module.scss';
import ListItem from './ListItem';
import { Place, useMapStore } from '@/utils/store/mapStore';
import Loader from '../Loader';

type ListItemProps = {
  elements: Place[];
  isMobile: boolean;
  setCurrentCenter: (element: Place) => void;
  setZoom: (zoom: number) => void;
};

type ListProps = {
  elements: Place[];
  isMobile: boolean;
};

const List: React.FC<ListItemProps> = ({ elements, isMobile, setCurrentCenter, setZoom }) => {

  return (
    <div
      className={elements.length > 6 ? listStyles.mainScroll : listStyles.main}
    >
      {elements.map((element, i) => {
        return (
          <ListItem
            href={'/map'}
            onClick={() => {setCurrentCenter(element); setZoom(16)}}
            subline={element.address}
            headline={element.name}
            key={i}
          />
        );
      })}
    </div>
  );
};

const ListComponent: React.FC<ListProps> = ({
  elements,
  isMobile,
}) => {
  const { setCurrentCenter, setZoom } = useMapStore();
  return (
    <>
      {!elements.length ? (
        <div className={listStyles.innerWrapperEmptyList}>
          <Loader size={32} />
        </div>
      ) : (
        <>
          <div className={listStyles.innerWrapper}>
            <List setZoom={setZoom} setCurrentCenter={setCurrentCenter}  isMobile={isMobile} elements={elements} />
          </div>
        </>
      )}
    </>
  );
};

export default ListComponent;
