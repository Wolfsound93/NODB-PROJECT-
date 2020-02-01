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

  postState = results => {
    this.setState({ musics: results });
  };

  changePage = page => {
    this.setState({ page });
  };

  changeFavorites = id => {
    axios
      .put(`/api/musics/${id}`, {
        favorites: this.state.toggleFav
      })
      .then(res => this.postState(res.data))
      .catch(error => console.log(error));
    // console.log(id);
  };

  render() {
    const { musics } = this.state;
    const mappedMusic = musics.map(val => {
      // console.log(val.id);
      return (
        <div key={val.id}>
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
              <button onClick={() => this.changeFavorites(val.id)}>
                Add to Favorites
              </button>
            </div>
            <p>{val.lyrics}</p>
          </div>
        </div>
      );
    });

    let myRoutes = {
      favorites: <Favorites />,
      'my lyrics': <MyLyrics />,
      home: mappedMusic
    };

    return (
      <div className='App'>
        <Header changePage={this.changePage} />
        {myRoutes[this.state.page]}
        {/* <Favorites music={this.state.musics} /> */}
      </div>
    );
  }
}

export default App;
