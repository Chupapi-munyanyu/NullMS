import React from 'react';
import './post.css';
import Navbar from '../../navbar';
import Footer from '../../footer';

export const Post = () => {
  return (
    <>
    <Navbar/>
    <div className="App">
      <header className="App-header">
        <p>No Man's Sky</p>
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cords">
        </label>
        <input maxLength={12} className="cords" id="cords" type="text" placeholder="1234567890AB"/>
      </header>
    </div>
    <Footer/>
    </>
  );
}
