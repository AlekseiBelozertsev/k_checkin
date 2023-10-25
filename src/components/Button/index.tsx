import React from 'react';
import buttonStyles from './button.module.scss';

type Button = {
  onClick?: () => void;
  text: string;
  type: 'primary' | 'secondary';
};

const Button: React.FC<Button> = ({ onClick, text, type }) => {
  const getButtonStyles = () => {
    switch (type) {
      case 'primary':
        return buttonStyles.primary;
      case 'secondary':
        return buttonStyles.secondary;
    }
  };
  return (
    <button
      style={{ cursor: 'pointer' }}
      onClick={onClick}
      className={getButtonStyles()}
    >
      <span className={buttonStyles.buttonText}>{text}</span>
    </button>
  );
};

export default Button;
