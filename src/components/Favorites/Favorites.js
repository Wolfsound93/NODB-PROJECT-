import React, { Component } from 'react';
import '../Favorites/Favorites.css';
class Favorites extends Component {
  constructor() {
    super();
  }
  render() {
    // const { music } = this.props;
    return (
      <div>
        <button>Remove from favorites</button>
        <button>Edit The Lyrics</button>
      </div>
    );

    // console.log(music);
    // const favorites = music.filter(val => {
    //   return val.favorites ? true : music;
    // });
    // const mappedMusics = favorites.map(val => {
    //       return (
    //         <div key={val.id}>
    //           <div className='card-title'>
    //             <h1>Artist Name: {val.artist}</h1>
    //             <h1>Song:{val.name}</h1>
    //           </div>
    //           <div className='card-content'>
    //             <div className='AddBtn'>
    //               <iframe
    //                 width='300'
    //                 height='210'
    //                 src={`https://www.youtube.com/embed/${val.youtube}`}
    //                 frameborder='0'
    //                 allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
    //                 allowfullscreen
    //               ></iframe>
    //               <button>Add to Favorites</button>
    //               <button>Edit</button>
    //               <button>Delete</button>
    //             </div>
    //             <p>{val.lyrics}</p>
    //           </div>
    //         </div>
    //       );
    //     });
    //     return <div>{mappedMusics}</div>;
  }
}

export default Favorites;
