import React from "react";
import Slider from "infinite-react-carousel";
import Photo from "../photo/photo.jsx";

const Gallery = (props) => {
  const {pictures} = props;

  const settings =  {
    className: 'gallery__item--slider',
    centerMode: true,
    initialSlide: 1,
    slidesToShow: 1,
    centerPadding: 0,
    duration: 800,

  };

  return (
    <div className="gallery">
      {pictures.map((picture) => (
        picture.length > 1 ?
        <Slider {...settings}>
          {picture.map((photo, i) => (
            <Photo info={photo} key={photo.src + `-${i}`}/>
          ))}
        </Slider>
        :
        <div className='gallery__item'>
          <Photo info={picture[0]} key={picture[0].src}/>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
