import React from 'react';
import Header from './component/Header';
import Body from './component/Body';
import Footer from './component/Footer';
import Map from './component/Map';

const Home = () => {
  return (
    <div className="w-full max-w-screen overflow-hidden">
      <Header />
      <Map />
      <Body/>
      <Footer />
    </div>
  );
};

export default Home;
