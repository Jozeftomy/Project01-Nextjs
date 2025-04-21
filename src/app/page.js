import React from 'react';
import Header from './component/Header';
import Body from './component/Body';
import Footer from './component/Footer';
import Map from './component/Map';

const Home = () => {
  return (
    <div>
      <Header />
      <Map />
      <Body/>
      <Footer />
    </div>
  );
};

export default Home;
