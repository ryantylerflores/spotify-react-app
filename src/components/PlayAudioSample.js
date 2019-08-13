import React, { Component } from 'react';

class PlayAudioSample extends React {
  render() {
    let audio = new Audio(this.props.audioPreview);

    const handlePlayClick = () => {
      if(audio.played.length === 0 || audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    }

    const { children } = this.props;
    return children({
      
    })
    
  }
}

export default PlayAudioSample;