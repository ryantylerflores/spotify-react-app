export default (state={ current: 'HOME' }, action) => {
  switch(action.type) {
    case 'TO_HOME':
      return {
        ...state,
        current: 'HOME'
      }
    case 'TO_SONGS':
      return {
        ...state,
        current: 'SONGS'
      }
    case 'TO_PLAYLIST':
      return {
        ...state,
        current: 'PLAYLIST', 
        id: action.payload
      }
    case 'TO_PLAYLISTS':
      return {
        ...state,
        current: 'PLAYLISTS'
      }
    case 'TO_STATIONS':
      return {
        ...state,
        current: 'STATIONS'
      }
    default:
      return state;
  }
}