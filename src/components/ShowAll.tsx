import React from 'react';
import showAllButtonStyles from './styles/showAll.module.scss';
import arrowDown from '../../public/icons/arrowDown.svg';
import Icon from './Icon';

type ShowAllBtnProps = {
  onClick: () => void;
};

const ShowAll: React.FC<ShowAllBtnProps> = ({ onClick }) => {
  return (
    <div onClick={onClick} className={showAllButtonStyles.main}>
      <span className={showAllButtonStyles.text}>{`Show all`}</span>
      <Icon height={16} width={16} src={arrowDown} />
    </div>
  );
};

export default ShowAll;
