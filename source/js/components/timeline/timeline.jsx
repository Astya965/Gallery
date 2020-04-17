import React from "react";

const Timeline = (props) => {
  const {timeline} = props;

  return (
    <div class="header__timeline timeline">
      <button class="timeline__toggle" type="button">Timeline ⟶</button>
      <ul class="timeline__list">
        {timeline.map((year, i) => (
          <li class="timeline__date" key={year + `-${i}`}>
            <a class="timeline__link" href="#">{year}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
