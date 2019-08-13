export default (state={},action) => {
  switch(action.type) {
    case 'FETCH_RECENTLY_PlAYED':
      return {
        ...state,
        recentlyPlayedSongs: action.payload
      }
    case 'FETCH_SONGS':
      // filter only songs with a preview url for song
      let songs = action.payload.filter(song => song.track.preview_url !== null);

      // take only the first 8
      songs = songs.slice(0,8);
      return {
        ...state,
        favoriteSongs: songs
      }
    case 'FETCH_PLAYLIST':
      return {
        ...state,
        playlist: action.payload
      }
    case 'FETCH_PLAYLISTS':
      return {
        ...state,
        playlists: action.payload
      }
    default:
      return state;
  }
}