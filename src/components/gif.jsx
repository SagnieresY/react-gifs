import React, { Component } from 'react';

class Gif extends Component {
  render() {
    return (
        <div className="selected-gif">
          <img src="https://media.giphy.com/media/6utOeiLIAouyH9H5FS/giphy.gif" alt="" className="gif"/>
        </div>
      );
  }
}

export default Gif;
