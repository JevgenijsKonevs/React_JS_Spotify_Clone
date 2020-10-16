import React from "react";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryIcon from "@material-ui/icons/LibraryMusic";
import "./Sidebar.css";
function Sidebar() {
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src={require("./img/spotify_logo_black_white.JPG")}
        alt=""
      />
      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryIcon} title="Your library" />
      <br></br>
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr></hr>
    </div>
  );
}

export default Sidebar;
