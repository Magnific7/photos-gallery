import React from 'react';
import styles from './index.module.scss';

type Props = {
  children: JSX.Element | string;
};

const Button: React.FC<Props> = ({ children }) => {
  return (
    <button className={styles.button}>
      <span className=" text-md pt-4 pb-4 pl-8 pr-8	text-base">{children}</span>
    </button>
  );
};

export default Button;
