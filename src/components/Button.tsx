import React from 'react';
import buttonStyles from '../../src/components/styles/button.module.scss';

type Button = {
  onClick: () => void;
};

const Button: React.FC<Button> = ({}) => {
  return (
    <button className={buttonStyles.mainButton}>
      <span className={buttonStyles.buttonText}>Add location</span>
    </button>
  );
};

export default Button;
