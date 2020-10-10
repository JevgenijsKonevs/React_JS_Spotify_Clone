export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
};
const reducer = (state, action) => {
  // set the props from initialState to the following states, based on the action
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
export default reducer;
