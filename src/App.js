import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch, NavLink, Link, Routes } from 'react-router-dom';
import React from 'react';
import Header from './pages/Header';
import Footer from './pages/Footer';
import About from './pages/About';
import Performances from './pages/Performances';
import Member from './pages/Members';
import Home from './pages/Home';
import FAQ from './pages/FAQ';

function App() {
  return (
    <Router>
      <div data-testid="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/members" element={<Member />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/performances" element={<Performances />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
