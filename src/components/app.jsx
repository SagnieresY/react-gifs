import React, { Component } from 'react';
import SearchBar from "./search_bar.jsx";
import Gif from "./gif.jsx";
import GifList from "./gif_list.jsx";

class App extends Component {

  render() {
    const gifs = [
      { id: '6utOeiLIAouyH9H5FS'},
      { id: '6utOeiLIAouyH9H5FS'}
    ];

    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <Gif id='6utOeiLIAouyH9H5FS' />
        </div>
        <div className="right-scene">
          <div className="gif-list">
            <GifList gifs={gifs} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
