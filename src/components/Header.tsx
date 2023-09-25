import React from 'react';
import headerStyles from '../../src/components/styles/header.module.scss';

const Header = () => {
  return (
    <header className={headerStyles.mainHeader}>
      <h1 className={headerStyles.headerHeadline}>{`Check in app`}</h1>
      <p className={headerStyles.headerParagraph}>{`Another pet project`}</p>
    </header>
  );
};

export default Header;
