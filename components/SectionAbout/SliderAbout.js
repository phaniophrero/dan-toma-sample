import { useState, useEffect, useCallback, useRef } from "react";
import SliderItemAbout from "./SliderItemAbout";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
// import ProgressBar from "./ProgressBar";
// import Circle from "../CircleProgress/Circle";
import Image from "next/image";
import arrowLeft from "../../public/images/arrow-left.svg";
import arrowRight from "../../public/images/arrow-left.svg";

import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const slidesAbout = [
  {
    id: 1,
    title: "But also the leap into",
    description1:
      "Of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    description2:
      "Of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    image: "/images/img4.jpeg",
    className: "slide-1",
  },
  {
    id: 2,
    title: "But also the leap into",
    description1:
      "Of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    description2:
      "Of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    image: "/images/img4.jpeg",
    className: "slide-2",
  },
  {
    id: 3,
    title: "But also the leap into",
    description1:
      "Of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    description2:
      "Of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    image: "/images/img4.jpeg",
    className: "slide-3",
  },
];

export const SliderAbout = ({ autoplayInterval }) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [stateSlides, setStateSlides] = useState(slidesAbout);
  const sliderRef = useRef(null);
  const slideRef = useRef(null);

  //   Clone the slides first and last
  useEffect(() => {
    const clonedSlides = [
      slidesAbout[slidesAbout.length - 1], // Clone the last
      ...slidesAbout,
      slidesAbout[0], // Clone the first
    ];
    setStateSlides(clonedSlides);
  }, []);

  useEffect(() => {
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
    <div className="slider-about">
      <div
        className="slider-about-inner"
        ref={sliderRef}
        style={{ transform: `translate(-${activeIndex * 100}%)` }}
      >
        {stateSlides.map((item, index) => {
          return (
            <SliderItemAbout
              item={item}
              key={index}
              width={"100%"}
              ref={slideRef}
            />
          );
        })}
      </div>
      <div className="slider-about-buttons">
        <div className="slider-about-buttons-right">
          <button
            onClick={prevHandleSlide}
            className="slider-about-button-arrow"
          >
            <span className="slider-about-btn-arrow-icon slider-about-btn-arrow-icon-left">
              <IoIosArrowDropleft />
            </span>
          </button>
          <button
            onClick={nextHandleSlide}
            className="slider-about-button-arrow"
          >
            <span className="slider-about-btn-arrow-icon slider-about-btn-arrow-icon-right">
              <IoIosArrowDropright />
            </span>
          </button>
        </div>

        <div className="slider-about-indicators">
          {slidesAbout.map((item, index) => {
            return (
              <button
                onClick={() => setActiveIndex(index)}
                key={index}
                className="slider-about-indicator-buttons-dot"
              >
                <span
                  className={`slider-about-dot ${
                    index === activeIndex ? "slider-about-dot-active" : ""
                  }`}
                ></span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
