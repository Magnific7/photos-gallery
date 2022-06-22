import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import LandingPage from '../Container/Landingpage';
import UpperNav from '../components/UpperNav';

const Home: NextPage = () => {
  return (
    <div>
      <UpperNav />
      <LandingPage />
      <LandingPage />
    </div>
  );
};

export default Home;
