import React from "react";
import "./Sidebar.css";
function Sidebar() {
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src={require("./img/spotify_logo_black_white.JPG")}
        alt=""
      />
    </div>
  );
}

export default Sidebar;
