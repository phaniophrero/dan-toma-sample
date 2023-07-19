import { useState, useEffect, useCallback, useRef } from "react";
import { SliderItem } from "./SliderItem";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import ProgressBar from "./ProgressBar";
import { slides } from "../../data/sliderData.json";
import Circle from "../CircleProgress/Circle";

export const Slider = ({ autoplayInterval }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  //   const nextSlide = () => {
  //     setActiveIndex(activeIndex === slides.length - 1 ? 0 : activeIndex + 1);
  //   };

  const nextSlide = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  }, [slides.length]);

  //   const prevSlide = () => {
  //     setActiveIndex(activeIndex === 0 ? slides.length - 1 : activeIndex - 1);
  //   };

  useEffect(() => {
    if (autoplayInterval) {
      const autoplay = setInterval(nextSlide, autoplayInterval);
      return () => clearInterval(autoplay);
    }
  }, [autoplayInterval, nextSlide]);

  //   const updateIndex = (newIndex) => {
  //     if (newIndex < 0) {
  //       newIndex = 0;
  //     } else if (newIndex >= slides.length) {
  //       newIndex = slides.length - 1;
  //     }
  //     setActiveIndex(newIndex);
  //   };

  return (
    <div className="slider">
      <div
        className="inner"
        style={{ transform: `translate(-${activeIndex * 100}%)` }}
      >
        {slides.map((item, index) => {
          return <SliderItem item={item} key={item.id} width={"100%"} />;
        })}
      </div>
      <div className="slider-buttons">
        <button
          //   onClick={() => updateIndex(activeIndex - 1)}
          onClick={prevSlide}
          className="button-arrow"
        >
          <span className="btn-arrow-icon btn-arrow-icon-left">
            <BsArrowLeft />
          </span>{" "}
        </button>
        {/* 
        <div className="indicators">
          <Circle
            slides={slides}
            nextSlide={nextSlide}
            autoplayInterval={autoplayInterval}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          /> */}
        {/* {slides.map((item, index) => (
          ))} */}
        {/* </div> */}

        <div className="indicators">
          {slides.map((item, index) => {
            return (
              <button
                // onClick={() => {
                //   updateIndex(index);
                // }}
                onClick={() => setActiveIndex(index)}
                key={index}
                className="indicator-buttons-dot"
              >
                <span
                  className={`dot ${index === activeIndex ? "dot-active" : ""}`}
                ></span>
              </button>
            );
          })}
        </div>
        <button
          //   onClick={() => updateIndex(activeIndex + 1)}
          onClick={nextSlide}
          className="button-arrow"
        >
          <span className="btn-arrow-icon btn-arrow-icon-right">
            <BsArrowRight />
          </span>
          {/* <span className="arrow-right"></span> */}
        </button>
      </div>
    </div>
  );
};
