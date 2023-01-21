import React, { FC } from 'react';
import Button from '../common/Button';
import styles from './index.module.scss';
import Image from 'next/image';
import image from '../../public/two.svg';

interface Props {
  value: any;
}

const LeftIntroduction = (props:Props) => {
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
      <img src={props.value?.urls?.full ? props.value?.urls?.full : image  } className={styles.Container__image} />
      <Button>Get started</Button>
    </div>
  );
};

export default LeftIntroduction;
