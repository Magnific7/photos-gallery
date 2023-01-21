import React, { FC, useEffect } from 'react';
import styles from './index.module.scss';
import LeftIntroduction from '../../components/LeftIntroduction';
import RightIntroduction from '../../components/RightIntroduction';
import { getPhotos } from '../../redux/actions/photos/getPhotos';
import { connect } from "react-redux";

interface Props {
  getPhotosProps: any;
  getPhotos: any;
}

const LandingPage = (props:Props) => {
  useEffect(() => {
    props.getPhotos();

  }, []);

  return (
    <div className={styles.Container}>
      <div className={styles.Container__wrapper}>
        <div className={styles.Container__wrapper__left}>
          <LeftIntroduction value={props.getPhotosProps}/>
        </div>
        <div className={styles.Container__wrapper__right}>
          <RightIntroduction />
        </div>
      </div>
    </div>
  );
};

// export default LandingPage;

const mapStateToProps = (state: any) => {
  return {
    // reducers state 
    getPhotosProps: state.getPhotos.photos.data,
  };
};
export default connect(mapStateToProps, { getPhotos })(LandingPage);
