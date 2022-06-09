import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white  font-bold py-2 px-4 rounded">
        Button
      </button>
    </div>
  );
};

export default Home;
