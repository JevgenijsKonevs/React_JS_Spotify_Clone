import React from "react";
import Header from "./Header";
import "./Body.css";
function Body({ spotify }) {
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img src="" alt="" />
        <div className="body__infoText"></div>
      </div>
    </div>
  );
}

export default Body;
