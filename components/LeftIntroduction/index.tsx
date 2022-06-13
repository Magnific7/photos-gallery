import React, { FC } from 'react';
import styles from './index.module.scss';

const LeftIntroduction = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Container__upper}>
        <span className="uppercase font-extrabold text-5xl 	pt-1">
          Decentralized <br /> cloud storage for <br /> your files and <br />
          medias
        </span>
      </div>
      <div className={styles.Container__description}>
        <span className=" text-base">
          The cheapest solution to saving your files <br />
          securely and reliably on a distributed <br />
          network
        </span>
      </div>
      <div className={styles.Container__button}>
        <span className="uppercase text-sm px-16 py-2">get started</span>
      </div>
    </div>
  );
};

export default LeftIntroduction;
