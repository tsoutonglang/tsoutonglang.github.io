import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Work from './components/work/Work';
import Footer from './components/footer/Footer.jsx';

import AlwaysCreating from './components/work/data/AlwaysCreating';
import CosmicDuels from './components/work/data/CosmicDuels';
import Daisy from './components/work/data/Daisy';
import Inheritance from './components/work/data/Inheritance';
import InTheNextLife from './components/work/data/InTheNextLife';
import LiveEvil from './components/work/data/Live-Evil.jsx';
import ToAllTheBoys from './components/work/data/ToAllTheBoys';
import Willy from './components/work/data/Willy';

import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
    <Header />
    
    <main className='main'>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Work />} />
        
        <Route path="/portfolio/always-creating" element={<AlwaysCreating />} />
        <Route path="/portfolio/cosmic-duels" element={<CosmicDuels />} />
        <Route path="/portfolio/daisy-the-elf" element={<Daisy />} />
        <Route path="/portfolio/inheritance" element={<Inheritance />} />
        <Route path="/portfolio/in-the-next-life" element={<InTheNextLife />} />
        <Route path="/portfolio/live-evil" element={<LiveEvil />} />
        <Route path="/portfolio/to-all-the-boys" element={<ToAllTheBoys />} />
        <Route path="/portfolio/willy-the-whale" element={<Willy />} />
      </Routes>
    </main>

    <Footer />
    </>
  )
}

export default App