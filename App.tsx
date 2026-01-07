
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import EstimateSection from './components/EstimateSection';
import Footer from './components/Footer';

// Page Components
const HomePage = () => (
  <main>
    <Hero />
    <About />
    <Services />
    <Portfolio />
    <EstimateSection />
  </main>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<EstimateSection />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
