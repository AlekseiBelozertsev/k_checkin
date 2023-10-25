// 'use client'
import { Place } from '@/utils/mocks/places';
import React from 'react';
import listStyles from './styles/list.module.scss';
import ListItem from './ListItem/ListItem';
import emptySadSmile from '../../public/emptyIcon.svg';
import { useMapStore } from '@/utils/store/mapStore';
import { useDrawerStore } from '@/utils/store/drawerStore';
import Icon from '../Icon/Icon';

type ListProps = {
  elements: Place[];
  isMobile: boolean;
};

type ListComponentProps = {
  elements: Place[];
  isMobile: boolean;
};

const List: React.FC<ListProps> = ({ elements, isMobile }) => {
  const { setCurrentCenter } = useMapStore();
  const { handleDrawerClose } = useDrawerStore();

  return (
    <div
      className={elements.length > 6 ? listStyles.mainScroll : listStyles.main}
    >
      {elements.map((element, i) => {
        return (
          <ListItem
            href={'/map'}
            onClick={() => {
              setCurrentCenter(element);
              isMobile && handleDrawerClose();
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
  elements,
  isMobile,
}) => {
  return (
    <>
      {!elements.length ? (
        <div className={listStyles.innerWrapperEmptyList}>
          <Icon width={64} height={64} src={emptySadSmile} />
          <h2 className={listStyles.headline}>{`No places listed. Yet...`}</h2>
          <List isMobile={isMobile} elements={elements} />
        </div>
      ) : (
        <>
          <div className={listStyles.innerWrapper}>
            {/* <h2 className={listStyles.headline}>{`Recently visited`}</h2> */}
            <List isMobile={isMobile} elements={elements} />
          </div>
        </>
      )}
    </>
  );
};

export default ListComponent;