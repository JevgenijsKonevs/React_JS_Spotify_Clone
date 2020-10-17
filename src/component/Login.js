import React from "react";
import { loginUrl } from "../data/spotify";
import Logo from "../img/spotify_logo_black.png";
import "../css/Login.scss";
function Login() {
  return (
    <div className="login">
      <img src={Logo} alt="" />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;
