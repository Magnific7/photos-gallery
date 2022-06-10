import React, { FC } from 'react';
import styles from './index.module.scss';
import LeftIntroduction from '../../components/LeftIntroduction';
import UpperNav from '../../components/UpperNav';

const LandingPage = () => {
  return (
    <div className={styles.Container}>
      <UpperNav />
      <LeftIntroduction />
    </div>
  );
};

export default LandingPage;
