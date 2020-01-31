import React, { Component } from 'react';
import '../Header/Header.css';
function Header() {
  return (
    <nav>
      <h1>Lyrics-Keys</h1>
      <ul>
        <li>
          <a href='#'>home</a>
          <a href='#'>favorites</a>
          <a href='#'>my lyrics</a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
