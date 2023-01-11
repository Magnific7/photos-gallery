import React, { FC } from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import { useDispatch, useSelector } from "react-redux";
import picture from '../../public/landing.svg';
import { IRootState } from '../../redux/initialStates';
import {useState, useEffect}  from 'react'

interface Props {
  photos: { [key: string]: any };
}

const Photos: FC = () => {
  const [image, setImage] = useState<any[]>([])

  
  // const {
  //   data: { get: photosList },
  //   loading: { get: loading },
  //   error: { get: getError },
  //   fetched: { get: getFetched },
  // } = useSelector();

  // useEffect(() => {
  //   setImage(photosList);
  // }, [photosList]);

  return (
    <div className={styles.Container}>
      <div className={styles.Container__wrapper}>
        <div className="grid grid-cols-4 gap-4 flex items-center">
        <div className="mb-4">
        <Image src={picture} className="max-w-full h-auto rounded-lg" />

  </div>
        </div>

        <div className="grid grid-cols-4 gap-4 flex items-center">
        <div className="mb-4">
        <Image src={picture} className="max-w-full h-auto rounded-lg" />

  </div>
        </div>

        <div className="grid grid-cols-4 gap-4 flex items-center">
        <div className="mb-4">
        <Image src={picture} className="max-w-full h-auto rounded-lg" />

  </div>
        </div>
        

      </div>
    </div>
  );
};

export default Photos;
