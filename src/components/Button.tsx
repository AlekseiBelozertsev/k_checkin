import React from 'react';
import buttonStyles from '../../src/components/styles/button.module.scss';

type Button = {
  onClick: () => void;
  text: string;
};

const Button: React.FC<Button> = ({ onClick, text }) => {
  return (
    <button
      style={{ cursor: 'pointer' }}
      onClick={onClick}
      className={buttonStyles.mainButton}
    >
      <span className={buttonStyles.buttonText}>{text}</span>
    </button>
  );
};

export default Button;
