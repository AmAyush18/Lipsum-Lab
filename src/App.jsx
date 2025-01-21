import React from 'react';
import LoremGenerator from './components/LoremGenerator';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-[#fdf0d5]">
      <Navbar />
      
      <Hero />

      <LoremGenerator />

      <Footer />
    </div>
  );
};

export default App;