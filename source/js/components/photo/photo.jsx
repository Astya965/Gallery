import React from "react";

const Photo = (props) => {
  const {adress} = props;

  return (
    <div className="photo">
    <figure className="photo__main">
      <div className="photo__wrapper">
        <a className="photo__link" href={adress}>
          <img className="photo__img" src={adress}/>
          <figcaption className="photo__description">Прекрасная северная сказка. Сияниe, звёзды и мы.</figcaption>
        </a>
      </div>
    </figure>
    <p className="photo__date"><time dateTime="2020-02-23">23.02.2020</time></p>
  </div>
  );
};

export default Photo;
