import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {years} from "./mocks/pictures.js";

ReactDOM.render(
  <App timeline={years}/>,
  document.querySelector(`#root`)
);
