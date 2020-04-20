import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {pictures, years} from "./mocks/pictures.js";

ReactDOM.render(
  <App pictures={pictures} timeline={years}/>,
  document.querySelector(`#root`)
);
