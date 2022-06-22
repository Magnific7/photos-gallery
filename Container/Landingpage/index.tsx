import React, { FC } from 'react';
import styles from './index.module.scss';
import LeftIntroduction from '../../components/LeftIntroduction';
import UpperNav from '../../components/UpperNav';
import RightIntroduction from '../../components/RightIntroduction';
import Footer from '../../components/Footer';

const LandingPage = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Container__wrapper}>
        <div className={styles.Container__wrapper__left}>
          <LeftIntroduction />
        </div>
        <div className={styles.Container__wrapper__right}>
          <RightIntroduction />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
