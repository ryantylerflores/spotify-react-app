export default (state={}, action) => {
  switch(action.type) {
    case 'USER_ID':
      return {
        ...state,
        userId: action.payload
      }
    default:
      return state;
  }
}