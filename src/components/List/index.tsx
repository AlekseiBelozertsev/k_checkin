import React from 'react';
import listStyles from './styles/list.module.scss';
import ListItem from './ListItem';
import { Place, useMapStore } from '@/utils/store/mapStore';
import Loader from '../Loader';
import { motion } from 'framer-motion';

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

const container = {
  hidden: { opacity: 1, scale: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}


const List: React.FC<ListItemProps> = ({ elements, isMobile, setCurrentCenter, setZoom }) => {

  return (
    <motion.div
      className={elements.length > 6 ? listStyles.mainScroll : listStyles.main}
      variants={container}
      initial="hidden"
      animate="visible"
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
    </motion.div>
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
