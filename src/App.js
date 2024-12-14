import React from 'react';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import MainContent from './components/MainContent';
import ImageSection from './components/ImageSection';
import Banner from './components/Banner';
import Recommended from './components/Recommended';
import Topics from './components/Topics';
import Popular from './components/Popular';
import Footer from './components/Footer';
import './style.css';

function App() {
  return (
    <div>
      <Navbar />
      <Categories />
      <MainContent />
      <ImageSection />
      <Banner />
      <Recommended />
      <Topics />
      <Popular />
      <Footer />
    </div>
  );
}

export default App;
