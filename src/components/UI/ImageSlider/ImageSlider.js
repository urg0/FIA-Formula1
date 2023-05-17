import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

import "./ImageSlider.css";

const ImageSlider = ({ slides, isBackdrop, index = 0 }) => {
  //index is the states initial value.
  const navigate = useNavigate();

  const [currentImage, setCurrentImage] = useState(index > -1 ? index : 0);
  const length = slides.length;

  const backdrop = isBackdrop ? "2" : "";

  const nextSlideHandler = () => {
    setCurrentImage((currentImage) =>
      currentImage === length - 1 ? 0 : currentImage + 1
    );
  };

  const prevSlideHandler = () => {
    setCurrentImage((currentImage) =>
      currentImage === 0 ? length - 1 : currentImage - 1
    );
  };
  const imgClickHandler = (index) => {
    setCurrentImage(index);
  };

  return (
    <div className={"container"}>
      <section className={`slider${backdrop}`}>
        <MdOutlineKeyboardDoubleArrowLeft
          className={`left-arrow${backdrop}`}
          onClick={prevSlideHandler}
        />

        {slides.map((slide, index) => {
          return (
            <div
              className={index === currentImage ? "slide active" : "slide"}
              key={slide.id}
            >
              {index === currentImage && !isBackdrop && (
                <Link to={slide.id}>
                  <img
                    src={slide.image}
                    alt={slide.id}
                    className={`image${backdrop}`}
                  />
                </Link>
              )}
              {index === currentImage && isBackdrop && (
                <img
                  src={slide.image}
                  alt="{slide.id}"
                  className={`image${backdrop}`}
                />
              )}
            </div>
          );
        })}
        <MdOutlineKeyboardDoubleArrowRight
          className={`right-arrow${backdrop}`}
          onClick={nextSlideHandler}
        />
        {isBackdrop && (
          <button onClick={() => navigate("..")} className="back">
            X
          </button>
        )}
      </section>
      <div className={`otherImages${backdrop}`}>
        {slides.map((img) => {
          return (
            <img
              onClick={() => imgClickHandler(slides.indexOf(img))}
              className={`slide-prew${backdrop}`}
              src={img.image}
              alt={slides.id}
              index={slides.indexOf(this)}
              key={img.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ImageSlider;
