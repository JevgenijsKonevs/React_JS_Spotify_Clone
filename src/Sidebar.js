import React from "react";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "./DataLayer";
import "./Sidebar.css";
function Sidebar() {
  // {playlists} is equal to dataLayer.playlists (getting playlists prop from the data layer component)
  const [{ playlists }, dispatch] = useDataLayerValue();
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

      {/* not working ?> */}
      {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} />
      ))}

      <SidebarOption title="hip-hop" />
    </div>
  );
}

export default Sidebar;
