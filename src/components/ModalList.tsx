import React from 'react';
import modalListStyles from './styles/modalList.module.scss';
import { Place } from '@/utils/mocks/places';
import ListItem from './ListItem';
import { useMapStore } from '@/utils/store/mapStore';
import { useModalStore } from '@/utils/store/modalStore';
import { useDrawerStore } from '@/utils/store/drawerStore';

type ListProps = {
  elements: Place[];
  isMobile: boolean;
};

const ModalList: React.FC<ListProps> = ({ elements, isMobile }) => {
  const { setCurrentCenter } = useMapStore();
  const { closeModal } = useModalStore();
  const { handleDrawerClose } = useDrawerStore();

  const listItems = elements.map((element, i) => (
    <ListItem
      onClick={() => {
        setCurrentCenter(element);
        closeModal('show-all-modal');
        isMobile && handleDrawerClose();
      }}
      headline={element.features[0].properties.name}
      subline={element.features[0].properties.place_formatted}
      key={i}
    />
  ));

  return (
    <div
      className={
        elements.length > 6 ? modalListStyles.mainScroll : modalListStyles.main
      }
    >
      {listItems}
    </div>
  );
};

export default ModalList;
