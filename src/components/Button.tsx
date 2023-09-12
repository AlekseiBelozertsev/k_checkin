import React from 'react';
import buttonStyles from '../../src/components/styles/button.module.scss';

type Button = {
  onClick: () => void;
  text: string;
  isMobileOnly?: boolean;
};

const Button: React.FC<Button> = ({ onClick, text, isMobileOnly }) => {
  return (
    <button
      style={{ cursor: 'pointer' }}
      onClick={onClick}
      className={
        !isMobileOnly ? buttonStyles.mainButton : buttonStyles.mobileOnlyButton
      }
    >
      <span className={buttonStyles.buttonText}>{text}</span>
    </button>
  );
};

export default Button;
