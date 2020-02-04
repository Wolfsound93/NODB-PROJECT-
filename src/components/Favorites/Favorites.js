import React, { Component } from 'react';
import '../Favorites/Favorites.css';
class Favorites extends Component {
  constructor() {
    super();
  }
  render() {
    const mappedArr = this.props.favorites.map(val => {
      const { artist, name, youtube, lyrics, id } = val;
      return (
        <section>
          <div className='card-title'>
            <h1>Artist Name: {artist}</h1>
            <h1>Song:{name}</h1>
          </div>
          <div className='card-content'>
            <div className='AddBtn'>
              <iframe
                width='300'
                height='210'
                src={`https://www.youtube.com/embed/${youtube}`}
                frameborder='0'
                allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen
              ></iframe>
              {/* <button onChange={() => }>Remove from favorites</button> */}
            </div>
            <p className='fun-hover' onBlur={this.props.newLyrics}>
              {lyrics.split('\n').map(val => {
                return (
                  <>
                    <span className='each__lyric'>{val.trim()}</span>
                    <br />
                  </>
                );
              })}
            </p>
          </div>
        </section>
      );
    });
    return <div>{mappedArr}</div>;
  }
}

export default Favorites;
