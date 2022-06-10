import React, { FC } from 'react';
import styles from './index.module.scss';

const UpperNav = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Container__logo}>
        <span className="uppercase font-extrabold text-3xl	">logo</span>
      </div>
      <div className={styles.Container__login}>
        <span className="uppercase text-sm pt-4 pb-4 pl-10 pr-10	text-base">
          login with metamask
        </span>
      </div>
    </div>
  );
};

export default UpperNav;
