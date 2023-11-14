import React from 'react';
import buttonStyles from './button.module.scss';
import { motion } from 'framer-motion';

type Button = {
  onClick?: () => void;
  text: string;
  type: 'primary' | 'secondary' | 'terciary';
};

const Button: React.FC<Button> = ({ onClick, text, type }) => {
  const getButtonStyles = () => {
    switch (type) {
      case 'primary':
        return buttonStyles.primary;
      case 'secondary':
        return buttonStyles.secondary;
      case 'terciary':
        return buttonStyles.terciary;
    }
  };
  return (
    <motion.button
      style={{ cursor: 'pointer' }}
      onClick={onClick}
      className={getButtonStyles()}
      whileHover={{ scale: 1.03}}
      whileTap={{
        scale: 0.95,
      }}
    >
      <span className={buttonStyles.buttonText}>{text}</span>
    </motion.button>
  );
};

export default Button;
