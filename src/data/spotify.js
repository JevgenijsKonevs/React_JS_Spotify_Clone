// https://developer.spotify.com/documentation/web-playback-sdk-quick-start/#

// redirect user to the spotify authorization page
export const authEndpoint = "https://accounts.spotify.com/authorize";

// redirect page, once the user logged in
const redirectUri = "http://localhost:3000/";

// clientId from https://developer.spotify.com/ dashboard
// several Ids were tested
const clientId = "ed62174d0e974f9c8c0b23dfc101d024";
//"b4437d704f794f09a7efb6c8ba18c34c";

// user permissions
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];
// get users access token from browser url
export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      // #accessToken=secretkey&name=...
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};
//building the login url once the LOGIN WITH SPOTIFY is pressed
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
