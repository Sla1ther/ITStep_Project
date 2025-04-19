// import logo from './logo.svg';
import q from './pages/img/q.png';
import instagram from './pages/img/inst 1.png';
import youtube from './pages/img/youtube 1.png';
import twitter from './pages/img/twitter 1.png';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Mathe from './pages/Math';
const Navbar = () => {

  return (
    <nav className='navbar'>
      <Link to="/" className="nav-link">
        Головна
      </Link>
      <Link to="/about" className="nav-link">
        Про нас
      </Link>
      <Link to="/math" className="nav-link">
        Математика
      </Link>
    </nav>
  );
}
const Footer = () => {
  return (
    <footer>
      <img src={q} className='q' />
      <div className='qwe'>
        <h1 className='footer_title'>Навчання</h1>
        <h2>Загальноосвітня школа</h2>
        <h2>Початкова школа</h2>
        <div className='socials'>
          <img src={instagram} className='social' />
          <img src={youtube} className='social' />
          <img src={twitter} className='social' />
        </div>
      </div>
      <div className='qwe'>
        <h1 className='footer_title'>Контакти</h1>
        <ul className='footer-sec'>


          <li className='footer-li'>
            <h2>вул. Ленкавського, 17б</h2>
            <p className='footer_title'>(067) 699-57-76  (050) 488-99-51 if@itstep.org<p>

              ПН. - ПТ з 09.00 до 19.00 СБ. з 09.00 до 16.00</p></p>
          </li>
          <li className='footer-li'>
            <p><h2>вул. Гузара, 49 (4 поверх)</h2></p>
            
          </li>





        </ul>

      </div>
    </footer>
  )
}
function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <img src={q} />
          <Navbar />
          <button className='join-btn'><Link to='/join' className='join-link'>Приєднатися</Link></button>

        </header>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/math' element={<Mathe />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
