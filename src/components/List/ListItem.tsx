import React from 'react';
import listItemStyles from './styles/listItem.module.scss';
import Link from 'next/link';
import deleteIcon from '../../../public/icons/deleteIcon.svg';
import Icon from '../Icon';
import { motion } from 'framer-motion';

type ListItemProps = {
  headline: string;
  subline: string;
  onClick: () => void;
  href: string;
};

  
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

const ListItem: React.FC<ListItemProps> = ({
  headline,
  subline,
  onClick,
  href,
}) => {
  return (
    <motion.div
      variants={item}
      whileHover={{ scale: 1.03}}
      whileTap={{
        scale: 0.95,
      }}
    >
      <Link href={href}>
        <div onClick={onClick} className={listItemStyles.main}>
          <div className={listItemStyles.contentWrapper}>
            <span className={listItemStyles.headline}>{headline}</span>
            <span className={listItemStyles.subtitle}>{subline}</span>
          </div>
          <button onClick={() => alert('"Delete" feature is not yet implemented')} className={listItemStyles.button}>
            <Icon height={32} width={32} src={deleteIcon} />
          </button>
        </div>
      </Link>
    </motion.div>
  );
};

export default ListItem;
