import axios from 'axios';

export const fetchPlaylists = (token) => async dispatch => {
  let response = await axios.get(`https://api.spotify.com/v1/me/playlists?limit=8`, { headers: { Authorization: `Bearer ${token}`}});
  dispatch({
    type: 'FETCH_PLAYLISTS',
    payload: response.data.items
  })
}

export const fetchPlaylist = (token,id) => async dispatch => {
  let response = await axios.get(`https://api.spotify.com/v1/playlists/${id}`, { headers: { Authorization: `Bearer ${token}`}});
  dispatch({
    type: 'FETCH_PLAYLIST',
    payload: response.data
  })
}