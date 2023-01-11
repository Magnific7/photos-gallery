import type { NextPage } from 'next';
import { Provider } from "react-redux";
import LandingPage from '../Container/Landingpage';

import UpperNav from '../components/UpperNav';
import Footer from '../components/Footer';
import Photos from '../components/Photos';
import store from '../redux/store'


const Home: NextPage = () => {
  return (
    <Provider store={store}>
    

  
      <UpperNav />
      <LandingPage />
      <Footer />
      <Photos /> 

      </Provider>
  );
};

export default Home;
