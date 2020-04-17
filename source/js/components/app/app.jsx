import React from "react";
import Header from "../header/header.jsx";
import Gallery from "../gallery/gallery.jsx";

const App = (props) => {
  const {timeline} = props;

  return (
    <React.Fragment>
      <Header timeline={timeline}/>
      <div className="wrapper">
        <Gallery/>
      </div>
    </React.Fragment>
  );
};

export default App;
