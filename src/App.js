import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Work from './components/work/Work';
import Footer from './components/footer/Footer.jsx';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
    <Header />
    
    <main className='main'>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Work />} />
      </Routes>
    </main>

    <Footer />
    </>
  )
}

export default App