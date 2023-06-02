import React from 'react';
import Loader from './Loader';

const HomePage = () => {

  return (
    <>
      <Loader />
      <div className="home min-h-screen min-w-screen">
        <div className="homeText bottom-20 text-4xl">
          It all started when
        </div>
      </div>
    </>
  );
}

export default HomePage;
