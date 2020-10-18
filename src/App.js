import React, { useEffect } from "react";
import Login from "./component/Login";
import { getTokenFromUrl } from "./data/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./component/Player";
import { useDataLayerValue } from "./data/DataLayer";
import "./App.css";

const spotify = new SpotifyWebApi();

function App() {
  // {user} is equal to dataLayer.user (getting user prop from the data layer component)
  const [{ user, token }, dispatch] = useDataLayerValue();
  // run code based on a give condition
  useEffect(() => {
    // assign access token to the variable hash
    const hash = getTokenFromUrl();
    // get access token
    //console.log(getTokenFromUrl());
    // hide the access token from the browser url
    window.location.hash = "";
    // assign access token to the variable _token
    const _token = hash.access_token;
    // store the token inside of the state
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      // "dispatch" means that once the getMe() f-on got the user it will dispatch it to the data layer, where all the songs, playlists are located,
      //avoiding passing it throughout the components
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      // get users username. The function will return promise
      // console.log(spotify.getMe());
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      // "2wVHAqMObGv0eL9itb9neW" is the value, which is obtained from official Spotify Web Player url
      // for example : https://open.spotify.com/playlist/2wVHAqMObGv0eL9itb9neW

      spotify.getPlaylist("1NuaHRy9M0PeDtljDtGfiL").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );
    }
  }, []);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
