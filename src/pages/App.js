import React, { Component } from 'react';
import { connect } from 'react-redux'

// Components
import Navbar from '../components/Navbar';
import Home from './Home';
import Songs from './Songs';
import Playlist from './Playlist';
import Playlists from './Playlists';
import Stations from './Stations';

class App extends Component {
  render() {
    let currentComponent;

    switch (this.props.location.current) {
      case 'HOME':
        currentComponent = <Home />
        break;
      case 'SONGS':
        currentComponent = <Songs />
        break;
      case 'PLAYLIST':
        currentComponent = <Playlist />
        break;
      case 'PLAYLISTS':
        currentComponent = <Playlists />
        break;
      case 'STATIONS':
        currentComponent = <Stations />
        break;
      default:
        currentComponent = <Home />
    }

    return (
      <React.Fragment>
        <Navbar />
        <main className="u-flex-grow-1">
          { currentComponent }
        </main>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { location: state.location }
}

export default connect(mapStateToProps)(App);
