import React from "react";
import Slider from "infinite-react-carousel";
import Photo from "../photo/photo.jsx";

const Gallery = (props) => {
  const {pictures} = props;

  const settings =  {
    className: 'gallery__item--slider',
    centerMode: true,
    initialSlide: 1,
  };

  return (
    <div className="gallery">
      {pictures.map((picture) => (
        picture.src.length > 1 ?
        <Slider {...settings}>
          {picture.src.map((photo, i) => (
            <Photo adress={photo} key={photo + `-${i}`}/>
          ))}
        </Slider>
        :
        <div className='gallery__item'>
          <Photo adress={picture.src[0]} key={picture.src[0]}/>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
