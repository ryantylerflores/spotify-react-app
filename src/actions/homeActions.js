import axios from 'axios';

export const setToken = payload => {
  return {
    type: 'SET_TOKEN',
    payload
  }
}

export const changeAppLocation = (location, index) => {
  location = location.toUpperCase();
  switch(location) {
    case 'SONGS':
      return{
        type: 'TO_SONGS'
      }
    case 'RECENTLY PLAYED':
      return{
        type: 'TO_HOME'
      }
    case 'PLAYLISTS':
      return{
        type: 'TO_PLAYLISTS',
      }
    case 'STATIONS':
     return{
       type: 'TO_STATIONS'
     }
    case 'PLAYLIST':
      return {
        type: 'TO_PLAYLIST',
        payload: index
      }
  }
}

export const spotifyCallback = token => async dispatch => {
  const response = await axios.get('https://api.spotify.com/v1/me', { headers: { Authorization: `Bearer ${token}`}});
  dispatch({
    type: 'USER_ID',
    payload: response.data.id
  })
}

export const fetchRecentlyPlayedSongs = token => async dispatch => {
  const response = await axios.get('https://api.spotify.com/v1/me/player/recently-played?limit=9', { headers: { Authorization: `Bearer ${token}`}});
  dispatch({
    type: 'FETCH_RECENTLY_PlAYED',
    payload: response.data.items
  })
}

export const fetchSongs = token => async dispatch => {
  const response = await axios.get(`https://api.spotify.com/v1/me/tracks`, { headers: { Authorization: `Bearer ${token}`}});
  dispatch({
    type: 'FETCH_SONGS',
    payload: response.data.items
  })
}
