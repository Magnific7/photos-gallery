import React, { FC } from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import image from '../../public/two.svg';

const RightIntroduction = () => {
  return (
    <div className={styles.Container}>
      <Image src={image} className={styles.Container__image} />
    </div>
  );
};

export default RightIntroduction;
