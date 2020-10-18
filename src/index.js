import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { DataLayer } from "./data/DataLayer";
import reducer, { initialState } from "./data/reducer";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <DataLayer initialState={initialState} reducer={reducer}>
    <App />
  </DataLayer>,
  document.getElementById("root")
);

serviceWorker.unregister();
