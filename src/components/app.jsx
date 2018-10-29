import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar, {DEFAULT_SEARCH} from "./search_bar.jsx";
import Gif from "./gif.jsx";
import GifList from "./gif_list.jsx";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs:[],
      selectedGifId: "srBH5iwo7W15C"
    };

    this.search(DEFAULT_SEARCH);
  }

search = (query) => {
  giphy({ apiKey: 'FsgfDzRCE1SIGCptYYnwj0KlXk41OIk9', https: true })
    .search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
}

  updateSelectedGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} updateGifFunction={this.updateSelectedGif} />
        </div>
      </div>
    );
  }
}

export default App;
