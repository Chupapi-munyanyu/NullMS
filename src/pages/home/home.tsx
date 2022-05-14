import React from 'react';
import './home.css';
import Navbar from '../../navbar';
import Footer from '../../footer';

export const Home = () => {
  return (
    <>
    <Navbar/>
    <div className="App">
      <header className="App-header">
        <p>Null Man's Sky</p>
      </header>
    </div>
    <Footer/>
    </>
  );
}

