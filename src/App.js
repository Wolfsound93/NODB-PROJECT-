import React, { Component } from 'react';
import Header from './components/Header/Header';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      musics: []
    };
  }

  componentDidMount() {
    axios
      .get('/api/musics')
      .then(response => {
        this.setState({ musics: response.data });
        console.log(response.data);
      })
      .catch();
  }

  render() {
    const { musics } = this.state;
    const mappedMusic = musics.map(val => {
      return (
        <div key={val.id}>
          <div className='card-title'>
            <h1>Artist Name: {val.artist}</h1>
            <h1>Song:{val.name}</h1>
          </div>
          <div className='card-content'>
            <iframe
              width='300'
              height='200'
              src={`https://www.youtube.com/embed/${val.youtube}`}
              frameborder='0'
              allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
            <p>{val.lyrics}</p>
          </div>
        </div>
      );
    });
    return (
      <div className='App'>
        <Header />
        {mappedMusic}
      </div>
    );
  }
}

export default App;
