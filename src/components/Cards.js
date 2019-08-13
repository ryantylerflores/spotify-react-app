import React from 'react';

class Cards extends React.Component {
  render() {
    const { children } = this.props;
    let audio = new Audio(this.props.audioPreview);

    const handlePlayClick = () => {
      if(audio.played.length === 0 || audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    }

    return children({play: handlePlayClick})
  }
}

export default Cards;