import React, { Component } from 'react';
import Header from './components/Header/Header';
import axios from 'axios';
import './App.css';
import Favorites from './components/Favorites/Favorites';
import MyLyrics from './components/MyLyrics/MyLyrics';

class App extends Component {
  constructor() {
    super();

    this.state = {
      musics: [],
      page: 'home',
      newLyrics: '',
      toggleFav: false
    };
  }

  componentDidMount() {
    axios
      .get('/api/musics')
      .then(response => {
        this.setState({ musics: response.data });
      })
      .catch();
  }

  changeFavorites = val => {
    console.log(val);
  };

  changePage = page => {
    this.setState({ page });
  };

  createCard = newCard => {
    this.setState({ musics: newCard });
  };

  removeCard = id => {
    axios
      .delete(`/api/musics/${id}`)
      .then(res => this.setState({ musics: res.data }));
  };

  newLyrics = e => {
    this.setState({ newLyrics: e.target.value });
    console.log(e.target.value);
  };

  editLyrics = id => {
    let newLyrics = this.state.newLyrics;
    axios
      .put(`/api/musics/${id}`, newLyrics)
      .then(res => this.setState({ musics: res.data }));
  };

  render() {
    const { musics } = this.state;
    const mappedMusic = musics.map(val => {
      // console.log(val.id);
      return (
        <section key={val.id}>
          <div className='card-title'>
            <h1>Artist Name: {val.artist}</h1>
            <h1>Song:{val.name}</h1>
          </div>
          <div className='card-content'>
            <div className='AddBtn'>
              <iframe
                width='300'
                height='210'
                src={`https://www.youtube.com/embed/${val.youtube}`}
                frameborder='0'
                allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen
              ></iframe>
              <button onClick={() => this.changeFavorites(val)}>
                Add to Favorites
              </button>
              <button onClick={this.editLyrics}>Edit The Lyrics</button>
              <button onClick={() => this.removeCard(val.id)}>
                Delete Song
              </button>
            </div>
            <p onChange={this.newLyrics}>{val.lyrics}</p>
          </div>
        </section>
      );
    });

    let myRoutes = {
      favorites: <Favorites />,
      'my lyrics': <MyLyrics createCard={this.createCard} />,
      home: mappedMusic
    };

    return (
      <div className='App'>
        <Header changePage={this.changePage} />
        {myRoutes[this.state.page]}
      </div>
    );
  }
}

export default App;
