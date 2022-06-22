import React, { FC } from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import image from '../../public/landing.png';

const RightIntroduction = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Container__image}>
        <Image src={image} height={400} width={450} />
      </div>
    </div>
  );
};

export default RightIntroduction;
