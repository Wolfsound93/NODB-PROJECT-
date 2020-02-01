import React, { Component } from 'react';
import '../Header/Header.css';
function Header(props) {
  return (
    <nav>
      <h1>
        <i className='fas fa-headphones'> </i>
        <span> Lyrics-Keys</span>
      </h1>
      <ul>
        <li onClick={() => props.changePage('home')}>home</li>
        <li onClick={() => props.changePage('favorites')}>favorites</li>
        <li onClick={() => props.changePage('my lyrics')}>my lyrics</li>
      </ul>
    </nav>
  );
}

export default Header;
