import React, { FC } from 'react';
import styles from './index.module.scss';

const Footer = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Container__wrapper}>
        <div>
          <span>3000</span>
          <br />
          <p>Videos uploaded</p>
        </div>
        <div>
          <span>3000</span>
          <br />
          <p>Videos uploaded</p>
        </div>
        <div>
          <span>3000</span> <br />
          <p>Videos uploaded</p>
        </div>
        <div>
          <span>3000</span> <br />
          <p>Videos uploaded</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
