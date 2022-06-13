import React, { FC } from 'react';
import styles from './index.module.scss';
import LeftIntroduction from '../../components/LeftIntroduction';
import UpperNav from '../../components/UpperNav';
import RightIntroduction from '../../components/RightIntroduction';
const LandingPage = () => {
  return (
    <div className={styles.Container}>
      <UpperNav />
      <div className={styles.Container__wrapper}>
        <LeftIntroduction />
        <RightIntroduction />
      </div>
    </div>
  );
};

export default LandingPage;
