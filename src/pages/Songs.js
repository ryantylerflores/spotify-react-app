import React, { Component } from 'react'
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { PlayCircleOutline } from '@material-ui/icons';

import Cards from '../components/Cards'

import * as actions from '../actions/homeActions';

class Songs extends Component {
  componentDidMount() {
    this.props.fetchSongs(this.props.token);
  }

  render() {
    const { songs } = this.props;

    if(!songs) {
      return <div>Loading...</div>
    }

    return (
      <section className="songs">
        <div className="songs--darken songs__container">
          <div className="songs__text-box">
            <h1 className="heading-primary">
              your favorite songs
            </h1>
          </div>
          <div className="songs__grid-container">
            <Grid container direction='row' justify='center' spacing={6}>
              { 
                this.props.songs.map((song,index) => {
                  let audioPreview = song.track.preview_url;
                  let artist = song.track.artists[0].name;
                  let title = song.track.name;
                  let albumURL = song.track.album.images[1].url;
                  return(
                    <Grid key={index} item>
                      <Cards audioPreview={audioPreview}>
                        {({play}) => (
                          <Card className="card__container--songs">
                            <CardMedia
                              className="card__album-cover--songs"
                              image={albumURL}
                            />
                            <div className="card__control--song">
                              <div className="card__play-container">
                                <PlayCircleOutline onClick={play} className="card__play-icon--song" />
                              </div>
                            </div> 
                          </Card>
                        )}
                      </Cards>
                      <div className="card__text-box--song u-text-center">
                        <p className="paragraph-primary">
                          <span className="paragraph-primary--main">{title}</span>
                          <span className="paragraph-primary--sub">{artist}</span>
                        </p>
                      </div>
                    </Grid>
                  )
                })

              }
            </Grid>
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = state => {
  return { 
    songs: state.songs.favoriteSongs,
    token: state.token.token
  }
}

export default connect(mapStateToProps, actions)(Songs);
