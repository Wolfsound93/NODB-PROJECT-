import React, { Component } from 'react';
import Header from './components/Header/Header';
import axios from 'axios';
import './App.css';
import Favorites from './components/Favorites/Favorites';
import MyLyrics from './components/MyLyrics/MyLyrics';
import EditLyrics from './components/EditLyrics/EditLyrics';

class App extends Component {
  constructor() {
    super();

    this.state = {
      musics: [],
      page: 'home',
      newLyrics: '',
      favorites: []
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
    this.setState({ favorites: [...this.state.favorites, val] });
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

  // removeFromFav = () => {
  //   let dataIndex = data.findIndex(val => val.id == id);
  //   data.splice(dataIndex, 1);
  //   res.status(200).json(data);
  // }

  editLyrics = id => {
    let newLyrics = this.state.newLyrics;
    axios.put(`/api/musics/${id}`, { newLyrics }).then(res => {
      this.setState({ musics: res.data });
    });
  };

  newLyrics = e => {
    this.setState({ newLyrics: e.target.innerText });
    console.dir(e.target.innerText);
  };

  render() {
    console.log(this.state.newLyrics);
    const { musics } = this.state;
    const mappedMusic = musics.map(val => {
      // console.log(val.id);
      return (
        <EditLyrics
          val={val}
          removeCard={this.removeCard}
          editLyrics={this.editLyrics}
          newLyrics={this.newLyrics}
          changeFavorites={this.changeFavorites}
        />
      );
    });

    let myRoutes = {
      favorites: <Favorites favorites={this.state.favorites} />,
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
