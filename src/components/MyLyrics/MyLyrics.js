import React, { Component } from 'react';
import '../MyLyrics/MyLyrics.css';

class MyLyrics extends Component {
  render() {
    return (
      <div>
        <div className='lyrics-input'>
          <h2>Create your own Lyrics Card</h2>
          <div className='user-input'>
            <input placeholder='type the name of the artist' />
            <input placeholder='type the name of the song' />
            <a href='#'>YoutubeLink</a>
            <input placeholder='type your lyrics' />
            <button>Create the Cartd</button>
            <button>Post the Card</button>
          </div>
        </div>
      </div>
    );
  }
}

export default MyLyrics;
