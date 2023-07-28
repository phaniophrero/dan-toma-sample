import { useState, useEffect, useCallback, useRef } from "react";
import SliderItem from "./SliderItem";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import ProgressBar from "./ProgressBar";
import { slides } from "../../data/sliderData.json";
import Circle from "../CircleProgress/Circle";
import Image from "next/image";
import arrowLeft from "../../public/images/arrow-left.svg";
import arrowRight from "../../public/images/arrow-left.svg";

import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

export const Slider = ({ autoplayInterval }) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [stateSlides, setStateSlides] = useState(slides);
  const sliderRef = useRef(null);
  const slideRef = useRef(null);

  //   Clone the slides first and last
  useEffect(() => {
    const clonedSlides = [
      slides[slides.length - 1], // Clone the last
      ...slides,
      slides[0], // Clone the first
    ];
    setStateSlides(clonedSlides);
  }, []);

  useEffect(() => {
    // const clonedSlides = [
    //   slidesData[slidesData.length - 1], // Clone the last
    //   ...slidesData,
    //   slidesData[0], // Clone the first
    // ];
    // setStateSlides(clonedSlides);

    sliderRef.current.style.transitionDuration = "0s";
    sliderRef.current.style.transform = `translate(-${activeIndex * 100}%)`;

    // Reset to the first one
    if (activeIndex === stateSlides.length - 1) {
      setTimeout(() => {
        sliderRef.current.style.transitionDuration = "0s";
        sliderRef.current.style.transform = `translate(-100%)`;
        setActiveIndex(1);
      }, 500);
    }

    // Reset to the cloned last one
    if (activeIndex === 0) {
      setTimeout(() => {
        sliderRef.current.style.transitionDuration = "0s";
        sliderRef.current.style.transform = `translate(-${
          (stateSlides.length - 2) * 100
        }%)`;
        setActiveIndex(stateSlides.length - 2);
      }, 500);
    }
  }, []);

  console.log("cloned slides: ", stateSlides);
  console.log("cloned slides length: ", stateSlides.length);

  const nextHandleSlide = () => {
    if (activeIndex < sliderRef.current.children.length - 2) {
      setActiveIndex(activeIndex + 1);
      sliderRef.current.style.transitionDuration = "0.5s";
      sliderRef.current.style.transform = `translate(-${
        (activeIndex + 1) * 100
      }%)`;
    } else {
      setTimeout(() => {
        setActiveIndex(0);
        sliderRef.current.style.transitionDuration = "0s";
        sliderRef.current.style.transform = `translate(0%)`;
        if (activeIndex === sliderRef.current.children.length - 2) {
          setTimeout(() => {
            sliderRef.current.style.transitionDuration = "0.5s";
            sliderRef.current.style.transform = `translate(-100%)`;
            setActiveIndex(1);
          }, 10);
        }
      }, 500);
    }
  };

  const prevHandleSlide = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
      sliderRef.current.style.transitionDuration = "0.5s";
      sliderRef.current.style.transform = `translate(-${
        (activeIndex - 1) * 100
      }%)`;
    } else {
      setTimeout(() => {
        setActiveIndex(sliderRef.current.children.length - 1);
        sliderRef.current.style.transitionDuration = "0s";
        sliderRef.current.style.transform = `translate(-${
          (sliderRef.current.children.length - 1) * 100
        }%)`;

        if (activeIndex === 0) {
          setTimeout(() => {
            sliderRef.current.style.transitionDuration = "0.5s";
            sliderRef.current.style.transform = `translate(-${
              (sliderRef.current.children.length - 2) * 100
            }%)`;
            setActiveIndex(sliderRef.current.children.length - 2);
          }, 10);
        }
      }, 500);
    }
  };

  console.log("activeIndex: ", activeIndex);

  return (
    <div className="slider">
      <div
        className="inner"
        ref={sliderRef}
        style={{ transform: `translate(-${activeIndex * 100}%)` }}
      >
        {stateSlides.map((item, index) => {
          return (
            <SliderItem item={item} key={index} width={"100%"} ref={slideRef} />
          );
        })}
      </div>
      <div className="slider-buttons">
        <div className="slider-buttons-right">
          <button onClick={prevHandleSlide} className="button-arrow">
            <span className="btn-arrow-icon btn-arrow-icon-left">
              <IoIosArrowDropleft />
            </span>
          </button>
          <button
            // onClick={() => {
            //   setActiveIndex(activeIndex + 1);
            //   siderRef.current.style.transform = `translate(${
            //     activeIndex * 100
            //   }%)`;
            // }}
            onClick={nextHandleSlide}
            // onClick={nextSlide}
            className="button-arrow"
          >
            <span className="btn-arrow-icon btn-arrow-icon-right">
              <IoIosArrowDropright />
            </span>
            {/* <span className="arrow-right"></span> */}
          </button>
        </div>
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
      </div>
    </div>
  );
};
