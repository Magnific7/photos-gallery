import type { NextPage } from 'next';
import LandingPage from '../Container/Landingpage';
import UpperNav from '../components/UpperNav';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
    <>
      <UpperNav />
      <LandingPage />
      <Footer />
    </>
  );
};

export default Home;
