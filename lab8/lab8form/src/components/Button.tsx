import React from 'react';
import styles from './Button.module.css';


type ButtonVariant = 'primary' | 'danger' | 'reset';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: ButtonVariant;
}


export const Button: React.FC<ButtonProps> = ({ 
  onClick, 
  children, 
  variant = 'primary' 
}) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${styles[variant]}`}
    >
      {children}
    </button>
  );
};