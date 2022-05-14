import React from 'react';
import './404.css';
import Navbar from '../../navbar';
import Footer from '../../footer';

export const Notfound = () => {
    return(
    <>
    <Navbar/>
    <div className="App">
      <header className="App-header">
        <p>Page not found</p>
      </header>
    </div>
    <Footer/>
    </>
    );
}
