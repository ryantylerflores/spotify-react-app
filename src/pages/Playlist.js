import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

import Cards from '../components/Cards';

import * as actions from '../actions/playlistActions';

class Playlist extends Component {
  componentDidMount() {
    this.props.fetchPlaylist(this.props.token, this.props.id);
  }

  render() {
    if(!this.props.playlist) {
      return <div>Loading...</div>
    }
    const { playlist } = this.props;
    const { name, images } = playlist;
    return (
      <section className="playlist">
          <div className="playlist--darken">
            <div className="playlist__text-box">
              <h1 className="heading-primary">
                { name }
              </h1>
            </div>
            <div className="playlist__grid-container">
              <div className="playlist__image-container">
                <img src={images[0].url} alt="album art" className="playlist__image" />
              </div>
              <div className="playlist__songs-container">
                {
                  playlist.tracks.items.map((song, index) => {
                    let minutes = Math.floor((song.track.duration_ms / 1000) / 60).toString();
                    let seconds = Math.floor((song.track.duration_ms / 1000) % 60).toString();
                    if(seconds.length === 1) {
                      seconds = "0" + seconds.toString();
                    }
                    let audioPreview = song.track.preview_url;
                    console.log(minutes, seconds);
                    return (
                      <Cards key={index} audioPreview={audioPreview}>
                        {({play}) => (
                          <div className="playlist__song-container">
                            <div className="playlist__song-info paragraph-primary">
                              <div className="card__play-icon--playlist">
                                <PlayArrowIcon onClick={play}/>
                              </div>
                              <span className="paragraph-primary--main"><p>{song.track.name}</p></span>
                              <span className="paragraph-primary--sub-gray"><p>{song.track.artists[0].name} | {song.track.album.name}</p></span>
                            </div>
                            <div className="playlist__song-duration">
                              <div className="paragraph-primary">
                                <span className="paragraph-primary--sub-gray"><p>{minutes}:{seconds}</p></span>
                              </div>
                            </div>
                          </div>
                        )}
                      </Cards>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </section>

    )
    }
}

const mapStateToProps = state => {
  return { 
    id: state.location.id,
    token: state.token.token,
    playlist: state.songs.playlist
   }
}

export default connect(mapStateToProps, actions)(Playlist);