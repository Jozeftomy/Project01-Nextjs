import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Map from './component/Map';
import Body from './component/Body' 

const Home = () => {
  return (
    <div className="w-full max-w-screen overflow-hidden">
      <Header />
      <Body/>
      <Map />
      <Footer />
    </div>
  );
};

export default Home;
