import React from "react";
import { loginUrl } from "../data/spotify";
import "../css/Login.scss";
function Login() {
  return (
    <div className="login">
      <img src={require("../img/spotify_logo_black.png")} alt="" />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;
