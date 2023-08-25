import React from 'react';
import modalListStyles from './styles/modalList.module.scss';
import { Place } from '@/utils/mocks/places';
import ListItem from './ListItem';

type ListProps = {
  elements: Place[];
};

const ModalList: React.FC<ListProps> = ({ elements }) => {
  return (
    <>
      {elements.length > 6 ? (
        <div className={modalListStyles.mainScroll}>
          {elements.map((element, i) => {
            return <ListItem content={element.town} key={i} />;
          })}
        </div>
      ) : (
        <div className={modalListStyles.main}>
          {elements.map((element, i) => {
            return <ListItem content={element.town} key={i} />;
          })}
        </div>
      )}
    </>
  );
};

export default ModalList;