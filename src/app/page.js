import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Map from './component/Map';

const Home = () => {
  return (
    <div className="w-full max-w-screen overflow-hidden">
      <Header />
      <Map />
      <Footer />
    </div>
  );
};

export default Home;
