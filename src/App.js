import React, { useEffect, useState } from "react";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";
import "./App.css";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  // {user} is equal to dataLayer.user
  const [{ user }, dispatch] = useDataLayerValue();
  // run code based on a give condition
  useEffect(() => {
    // assign access token to the variable hash
    const hash = getTokenFromUrl();
    // hide the access token from the browser url
    window.location.hash = "";
    // assign access token to the variable _token
    const _token = hash.access_token;
    // store the token inside of the state
    if (_token) {
      setToken(_token);
      // "dispatch" means that once the getMe() f-on got the user it will dispatch it to the data layer, where all the songs, playlists are located,
      //avoiding passing it throughout the components
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
    }
  }, []);
  return <div className="app">{token ? <Player /> : <Login />}</div>;
}

export default App;
