import React, { FC } from 'react';
import styles from './index.module.scss';

const UpperNav = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Container__logo}>
        <span className="uppercase font-extrabold text-3xl	">logo</span>
      </div>
      <div className={styles.Container__login}>
        <p className=" text-sm pt-4 pb-4 pl-10 pr-10	text-base">Photos</p>
        <p className=" text-sm pt-4 pb-4 pl-10 pr-10	text-base">Videos</p>
        <p className=" text-sm pt-4 pb-4 pl-10 pr-10	text-base">Contacts</p>
        <p className=" text-sm pt-4 pb-4 pl-10 pr-10	text-base">Files</p>
        <span className=" text-sm pt-4 pb-4 pl-10 pr-10	text-base">
          Login with metamask
        </span>
      </div>
    </div>
  );
};

export default UpperNav;
