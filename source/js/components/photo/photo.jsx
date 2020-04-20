import React from "react";

const Photo = (props) => {
  const {info} = props;

  return (
    <div className="photo">
    <figure className="photo__main">
      <div className="photo__wrapper">
        <a className="photo__link" href={info.src}>
          <img className="photo__img" src={info.src}/>
          <figcaption className="photo__description">{info.description}</figcaption>
        </a>
      </div>
    </figure>
    <p className="photo__date"><time dateTime={info.date}>{info.date}</time></p>
  </div>
  );
};

export default Photo;
