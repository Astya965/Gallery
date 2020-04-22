import React, {PureComponent} from "react";

const MOBILE_WIDTH = 780;

class Timeline extends PureComponent {
  constructor(props) {
    super(props);

    this._onButtonToggle = this._onButtonToggle.bind(this);
  }

  _onButtonToggle() {
    const list = document.querySelector(`.timeline__list`);

    list.classList.toggle(`visually-hidden`);
    console.log(1);
  }

  render() {
    return (
      <div className={`header__timeline timeline`}>
      <button className="timeline__toggle" type="button" onClick={this._onButtonToggle}>Timeline ⟶</button>
      <ul className={`timeline__list ${document.documentElement.clientWidth <= MOBILE_WIDTH ? `visually-hidden` : ``}`}>
        {this.props.timeline.map((year, i) => (
          <li className="timeline__date" key={year + `-${i}`}>
            <a className="timeline__link" href="#">{year}</a>
          </li>
        ))}
      </ul>
    </div>
    );
  }
}

export default Timeline;
