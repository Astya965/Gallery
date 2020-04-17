import React from "react";

const Timeline = (props) => {
  const {timeline} = props;

  return (
    <div className="header__timeline timeline">
      <button className="timeline__toggle" type="button">Timeline ⟶</button>
      <ul className="timeline__list">
        {timeline.map((year, i) => (
          <li className="timeline__date" key={year + `-${i}`}>
            <a className="timeline__link" href="#">{year}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
