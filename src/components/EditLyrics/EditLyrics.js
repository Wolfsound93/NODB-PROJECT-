import React, { Component } from 'react';

class EditLyrics extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { artist, name, youtube, lyrics, id } = this.props.val;
    // console.log(this.props.val);
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
            <button onClick={() => this.props.changeFavorites(this.props.val)}>
              Add to Favorites
            </button>
            <button onClick={() => this.props.editLyrics(id)}>
              Save New Edits
            </button>
            <button onClick={() => this.props.removeCard(id)}>
              Delete Song
            </button>
          </div>
          <p onBlur={this.props.newLyrics}>{lyrics}</p>
        </div>
      </section>
    );
  }
}

export default EditLyrics;
