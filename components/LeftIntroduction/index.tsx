import React, { FC } from 'react';
import Button from '../common/Button';
import styles from './index.module.scss';

const LeftIntroduction = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Container__title}>
        Storage for your files <br /> and medias
      </div>
      <div className={styles.Container__description}>
        The cheapest solution to saving <br />
        your files securely and reliably
        <br /> on a distributed network
      </div>
      <Button>Get started</Button>
    </div>
  );
};

export default LeftIntroduction;
