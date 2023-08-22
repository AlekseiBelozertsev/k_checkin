import React from 'react';
import headerStyles from '../../src/components/styles/header.module.scss';

const Header = () => {
  return (
    <div className={headerStyles.mainHeader}>
      <h1 className={headerStyles.headerHeadline}>{`Kika's check in`}</h1>
      <p
        className={headerStyles.headerParagraph}
      >{`Find the places you have been to with ease.`}</p>
    </div>
  );
};

export default Header;
