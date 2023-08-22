import React from 'react';
import showAllButtonStyles from './styles/showAll.module.scss';

type ShowAllBtnProps = {
  onClick: () => void;
};

const ShowAll: React.FC<ShowAllBtnProps> = ({ onClick }) => {
  return (
    <div className={showAllButtonStyles.main}>
      <span className={showAllButtonStyles.text}>{`Show all`}</span>
    </div>
  );
};

export default ShowAll;
