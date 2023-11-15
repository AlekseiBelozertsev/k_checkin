import React from 'react';
import headerStyles from './header.module.scss';

type HeaderProps = {
  headline: string;
  subtitle: string;
}

const Header: React.FC<HeaderProps> = ({
  headline,
  subtitle
}) => {
  return (
    <header className={headerStyles.mainHeader}>
      <h1 className={headerStyles.headerHeadline}>{headline}</h1>
      <p className={headerStyles.headerParagraph}>{subtitle}</p>
    </header>
  );
};

export default Header;
