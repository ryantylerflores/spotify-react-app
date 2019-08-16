import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

import Cards from '../components/Cards';

import * as actions from '../actions/homeActions';

class Home extends Component {
  componentDidMount() {
    this.token = window.location.hash.substr(1).split('&')[0].split("=")[1];

    if(!this.token){
      // window.location.href = ('https://accounts.spotify.com/authorize?client_id=a170ad2c4056402e81316196ede04fb2&scope=playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20user-read-recently-played%20playlist-modify-private%20ugc-image-upload%20user-follow-modify%20user-follow-read%20user-library-read%20user-library-modify%20user-read-private%20user-read-email%20user-top-read%20user-read-playback-state&redirect_uri=http://localhost:3000&response_type=token&show_dialog=true');
      window.location.href = ('https://accounts.spotify.com/authorize?client_id=a170ad2c4056402e81316196ede04fb2&scope=playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20user-read-recently-played%20playlist-modify-private%20ugc-image-upload%20user-follow-modify%20user-follow-read%20user-library-read%20user-library-modify%20user-read-private%20user-read-email%20user-top-read%20user-read-playback-state&redirect_uri=https://www.spotify-react-app.netlify.com&response_type=token&show_dialog=true');
    } else {
      this.props.spotifyCallback(this.token);
      this.props.setToken(this.token);
      this.props.fetchRecentlyPlayedSongs(this.token);
    }
  }

  renderAlbumCovers = () => {
    return this.props.recentlyPlayed.map((tracks,index) => {
      let albumURL = tracks.track.album.images[1].url;
      let albumTitle = tracks.track.album.name;
      let artist = tracks.track.artists[0].name;
      let songTitle = tracks.track.name;
      let audioPreview = tracks.track.preview_url
      return (
        <Grid key={index} item>
          <Cards audioPreview={audioPreview}>
            {({play}) => (
              <Card className='card__container--home'>
                <div className='card__details--home'>
                  <CardContent className='card__content--home'>
                    <Typography noWrap component="h6" variant="h6">
                      {songTitle}
                    </Typography>
                    <Typography noWrap variant="subtitle1" color="textSecondary">
                      {artist}
                    </Typography>
                  </CardContent>
                  <div className="card__control--home">
                    <IconButton onClick={play} aria-label="Play/pause">
                      <PlayArrowIcon className='card__play-icon--home' />
                    </IconButton>
                  </div>
                </div>
                <CardMedia
                  className="card__album-cover--home"
                  image={albumURL}
                  title={albumTitle}
                />
              </Card>
            )}
          </Cards>
        </Grid>
      )
    })
  }

  render() {
    const { recentlyPlayed } = this.props;

    if(!recentlyPlayed) {
      return <div className="home">Loading...</div>
    }

    return (
      <section className="home">
        <div className='home__container home--darken'>
          <div className="home__text-box">
            <h1 className='heading-primary'>
              your recent songs
            </h1>
          </div>
          <div className="home__grid-container">
            <Grid container direction='row' justify='center' spacing={6} >
              { this.renderAlbumCovers() }
            </Grid>
          </div>
        </div>
      </section>
    )
  }
}


const mapStateToProps = state => {
  return { recentlyPlayed: state.songs.recentlyPlayedSongs }
}


export default connect(mapStateToProps,actions)(Home);
