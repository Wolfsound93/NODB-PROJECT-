import React, { Component } from 'react';
import '../MyLyrics/MyLyrics.css';
import axios from 'axios';

class MyLyrics extends Component {
  constructor() {
    super();

    this.state = {
      id: 6,
      artist: '',
      name: '',
      youtube: '',
      lyrics: ''
    };
  }

  inputChange = e => {
    console.log(e.target);
    this.setState({ [e.target.name]: e.target.value });
  };

  addCard = () => {
    let newCard = {
      id: this.state.id,
      artist: this.state.artist,
      name: this.state.name,
      youtube: this.state.youtube,
      lyrics: this.state.lyrics
    };
    axios.post('/api/musics', newCard).then(res => {
      this.props.createCard(res.data);
    });
    this.setState({ id: this.state.id + 1 });
  };

  render() {
    return (
      <div className='input-container'>
        <div className='lyrics-input'>
          <h2>Create your own Lyrics Card</h2>
          <div className='user-input'>
            <input
              name='artist'
              placeholder='type the name of the artist'
              onChange={this.inputChange}
            />
            <input
              name='name'
              placeholder='type the name of the song'
              onChange={this.inputChange}
            />
            <input
              name='youtube'
              placeholder='type in your youtube id'
              onChange={this.inputChange}
            />
            {/* <input
              className='lyrics-box'
              name='lyrics'
              placeholder='type your lyrics here!'
              onChange={this.inputChange}
            /> */}
            <textarea
              className='lyrics-box'
              name='lyrics'
              placeholder='type your lyrics here!'
              onChange={this.inputChange}
            ></textarea>
            <button className='crt-btn' onClick={this.addCard}>
              Create the Card
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MyLyrics;
