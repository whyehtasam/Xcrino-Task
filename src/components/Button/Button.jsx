// components/Button/Button.js
import React from 'react';
import styles from '../Button/btn.module.css';

const Button = ({ children, className}) => {
  return<button className={`${styles.button} ${className}`}>{children}</button>;

};

export default Button;
