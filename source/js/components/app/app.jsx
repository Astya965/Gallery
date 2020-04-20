import React from "react";
import Header from "../header/header.jsx";
import Gallery from "../gallery/gallery.jsx";

const App = (props) => {
  const {pictures, timeline} = props;

  return (
    <React.Fragment>
      <Header timeline={timeline}/>
      <div className="wrapper">
        <Gallery pictures={pictures}/>
      </div>
    </React.Fragment>
  );
};

export default App;
