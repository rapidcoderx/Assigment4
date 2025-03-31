import React from 'react';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Footer from './components/Footer';
import './styles.css';


const Homepage = () => {
  return (
    <div className="homepage">
      <Header />
      <MainSection />
      <Footer />
    </div>
  );
};

export default Homepage;
