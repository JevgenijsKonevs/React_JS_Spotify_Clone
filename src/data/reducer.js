export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,

  // token value to be automatically signed in the app. Uncomment only for development purpose.
  // If the token value is assigned - no data can be displayed on the page
  // several tokens were tested

  //token:
  //"BQCWXRdhXRk6E9ohfA7HoOhgN8Xi7N_ih68QI9ZbO74i3a5RaQ0fcdy-3dwYi25t0UZ6PkqTk8GEcI_h1K47Nby513Rax0TJl0z6mU989dAtGBtTstniVEO-C6B2GFBuYX8tSexFIYWGUhcSXTdw1VXwT_9MeI56IsFPSj-GZAuyDxrW",
  //token:
  //"BQBBoLLLgC1DoVxkrnFXiaVPcw-L25TVnN0iPQJuo-uWcHtvI4…7kf7HuGoHJ0ea3BAJK_FHYczpYK10eJooOheInIFbMKN6Y6s4",
};

const reducer = (state, action) => {
  // set the props from initialState to the following states, based on the action
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};
export default reducer;
