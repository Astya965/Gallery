import React from "react";

const Gallery = (props) => {
  const {pictures} = props;

  return (
    <ul className="gallery">
      <li className="gallery__item">
          <ul className="gallery__sublist sublist">
            <li className="sublist__item photo photo--mini">
              <figure className="photo__main">
                <div className="photo__wrapper">
                  <a className="photo__link" href="#">
                    <img className="photo__img" src="img/2019_04_28-1.jpg"/>
                    <figcaption className="photo__description">Море сакуры. Сложно поверить, что это моя жизнь, а не кадр из фильма.</figcaption>
                  </a>
                </div>
              </figure>
              <p className="photo__date photo__date"><time dateTime="2019-04-28">28.04.2019</time></p>
            </li>
            <li className="sublist__item photo">
              <figure className="photo__main">
                <div className="photo__wrapper">
                  <a className="photo__link" href="img/2019_04_28-1.jpg">
                    <img className="photo__img" src="img/2019_04_28-1.jpg"/>
                    <figcaption className="photo__description">Море сакуры. Сложно поверить, что это моя жизнь, а не кадр из фильма.</figcaption>
                  </a>
                </div>
              </figure>
              <p className="photo__date"><time dateTime="2019-04-28">28.04.2019</time></p>
            </li>
            <li className="sublist__item photo photo--mini">
              <figure className="photo__main">
                <div className="photo__wrapper">
                  <a className="photo__link" href="#S">
                    <img className="photo__img" src="img/2019_04_28-1.jpg"/>
                    <figcaption className="photo__description">Море сакуры. Сложно поверить, что это моя жизнь, а не кадр из фильма.</figcaption>
                  </a>
                </div>
              </figure>
              <p className="photo__date"><time dateTime="2019-04-28">28.04.2019</time></p>
            </li>
            <button className="sublist__button sublist__button--left"></button>
            <button className="sublist__button sublist__button--right"></button>
          </ul>
        </li>
        <li className="gallery__item">
          <ul className="gallery__sublist sublist sublist--one">
            <li className="sublist__item photo">
              <figure className="photo__main">
                <div className="photo__wrapper">
                  <a className="photo__link" href="img/2019_04_28-1.jpg">
                    <img className="photo__img" src="img/2019_04_28-1.jpg"/>
                    <figcaption className="photo__description">Море сакуры. Сложно поверить, что это моя жизнь, а не кадр из фильма.</figcaption>
                  </a>
                </div>
              </figure>
              <p className="photo__date"><time dateTime="2019-04-28">28.04.2019</time></p>
            </li>
            <button className="sublist__button sublist__button--left"></button>
            <button className="sublist__button sublist__button--right"></button>
          </ul>
        </li>
        <li className="gallery__item photo">
          <figure className="photo__main">
            <div className="photo__wrapper">
              <a className="photo__link" href="img/2020_02_23.jpg">
                <img className="photo__img" src="img/2020_02_23.jpg"/>
                <figcaption className="photo__description">Прекрасная северная сказка. Сияниe, звёзды и мы.</figcaption>
              </a>
            </div>
          </figure>
          <p className="photo__date"><time dateTime="2020-02-23">23.02.2020</time></p>
        </li>
        <li className="gallery__item">
          <ul className="gallery__sublist sublist">
            <li className="sublist__item photo photo--mini">
              <figure className="photo__main">
                <div className="photo__wrapper">
                  <a className="photo__link" href="#">
                    <img className="photo__img" src="img/2020_02_23.jpg"/>
                    <figcaption className="photo__description">Море сакуры. Сложно поверить, что это моя жизнь, а не кадр из фильма.</figcaption>
                  </a>
                </div>
              </figure>
              <p className="photo__date photo__date"><time dateTime="2019-04-28">28.04.2019</time></p>
            </li>
            <li className="sublist__item photo">
              <figure className="photo__main">
                <div className="photo__wrapper">
                  <a className="photo__link" href="img/2019_04_28-1.jpg">
                    <img className="photo__img" src="img/2019_04_28-1.jpg"/>
                    <figcaption className="photo__description">Море сакуры. Сложно поверить, что это моя жизнь, а не кадр из фильма.</figcaption>
                  </a>
                </div>
              </figure>
              <p className="photo__date"><time dateTime="2019-04-28">28.04.2019</time></p>
            </li>
            <li className="sublist__item photo photo--mini">
              <figure className="photo__main">
                <div className="photo__wrapper">
                  <a className="photo__link" href="#">
                    <img className="photo__img" src="img/2019_07_21.jpg"/>
                    <figcaption className="photo__description">Море сакуры. Сложно поверить, что это моя жизнь, а не кадр из фильма.</figcaption>
                  </a>
                </div>
              </figure>
              <p className="photo__date"><time dateTime="2019-04-28">28.04.2019</time></p>
            </li>
            <button className="sublist__button sublist__button--left"></button>
            <button className="sublist__button sublist__button--right"></button>
          </ul>
        </li>
        <li className="gallery__item photo">
          <figure className="photo__main">
            <div className="photo__wrapper">
              <a className="photo__link" href="img/2019_07_21.jpg">
                <img className="photo__img" src="img/2019_07_21.jpg"/>
                <figcaption className="photo__description">Светло и радостно. Я влюбилась и встречаю новый день среди прерасных людей.</figcaption>
              </a>
            </div>
          </figure>
          <p className="photo__date"><time dateTime="2019-07-21">21.07.2019</time></p>
        </li>
    </ul>
  );
};

export default Gallery;

// {pictures.map((picturegroup, i) =>
//   <li className="gallery__item" key={picturegroup.date + `-${i}`}>
//     {picturegroup.length > 1 ?
//       <GallerySublist pictures={picturegroup}/> :
//       <Picture picture={picturegroup[0]}/>
//     }
//   </li>
// )}
