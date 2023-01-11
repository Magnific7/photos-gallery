import React, { FC } from 'react';
import styles from './index.module.scss';
import LeftIntroduction from '../../components/LeftIntroduction';
import RightIntroduction from '../../components/RightIntroduction';

const LandingPage: FC = () => {
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
    </div>
  );
};

export default LandingPage;
