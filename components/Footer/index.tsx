import React, { FC } from 'react';
import styles from './index.module.scss';

const Footer = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Container__wrapper}>
        <div className={styles.Container__wrapper__item}>
          <div className={styles.Container__wrapper__item__title}>3,000</div>
          <div className={styles.Container__wrapper__item__subtitle}>
            Videos uploaded
          </div>
        </div>

        <div className={styles.Container__wrapper__item}>
          <div className={styles.Container__wrapper__item__title}>4,500</div>
          <div className={styles.Container__wrapper__item__subtitle}>
            Photos uploaded
          </div>
        </div>

        <div className={styles.Container__wrapper__item}>
          <div className={styles.Container__wrapper__item__title}>200</div>
          <div className={styles.Container__wrapper__item__subtitle}>
            Contacts uploaded
          </div>
        </div>

        <div className={styles.Container__wrapper__item}>
          <div className={styles.Container__wrapper__item__title}>6,453</div>
          <div className={styles.Container__wrapper__item__subtitle}>
            Files uploaded
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
