import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';

import Cards from '../components/Cards';

// import * as actions from '../actions/playlistActions'
import { fetchPlaylists } from '../actions/playlistActions';
import { changeAppLocation } from '../actions/homeActions';

class Playlists extends Component {
  componentDidMount(){
    this.props.fetchPlaylists(this.props.token);
  }

  render() {
    const { playlists } = this.props;

    console.log(playlists);

    if(!playlists) {
      return <div>Loading...</div>
    }

    return (
      <section className="playlists">
        <div className="playlists--darken">
          <div className="playlists__text-box">
            <h1 className="heading-primary">
              your playlists
            </h1>
          </div>
          <div className="playlists__grid-container">
            <Grid container direction='row' justify='center' spacing={6}>
              { 
                playlists.map((playlist,index) => {
                  let title = playlist.name;
                  let albumURL = playlist.images[0].url;
                  let id = playlist.id;
                  console.log(albumURL)
                  return(
                    <Grid key={index} item>
                      <Cards>
                        {() => (
                          <Card className="card__container--playlists" onClick={() => this.props.changeAppLocation('PLAYLIST', id)}>
                            <CardMedia
                              className="card__album-cover--playlists"
                              image={albumURL}
                            />
                          </Card>
                        )}
                      </Cards>
                      <div className="card__text-box--playlists u-text-center">
                        <p className="paragraph-primary">
                          <span className="paragraph-primary--main">{title}</span>
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

const mapDispatchToProps = dispatch => {
  return  bindActionCreators({ fetchPlaylists, changeAppLocation}, dispatch)
}

const mapStateToProps = state => {
  return { 
    token: state.token.token,
    playlists: state.songs.playlists
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlists);
