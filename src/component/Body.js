import React from "react";
import Header from "./Header";
import { useDataLayerValue } from "../data/DataLayer";
import PlayIcon from "@material-ui/icons/PlayCircleOutline";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import MoreIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";
import "../css/Body.scss";
function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img src={discover_weekly?.images[1].url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayIcon className="body__shuffle" />

          <FavoriteBorderOutlinedIcon fontSize="large" />
          <MoreIcon />
        </div>
        {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
