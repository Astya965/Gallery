import React from "react";
import Timeline from "../timeline/timeline.jsx";

const Header = (props) => {
  const {timeline} = props;

  return (
    <header className="header">
      <img className="header__icon" src="img/paint.svg"/>
      <Timeline timeline={timeline}/>
    </header>
  );
};

export default Header;
