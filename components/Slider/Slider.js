import { useState } from "react";
import { SliderItem } from "./SliderItem";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import ProgressBar from "./ProgressBar";

export const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      video: "/video/video.mp4",
      title: "Welcome",
      //   path: "",
      className: "centered-slide",
      description:
        "Imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n’a pas fait que survivre cinq siècles, mais s’est aussi adapt à la bureautique informatique, sans que son contenu n’en soit modifié.",
    },
    {
      video: "/video/video-2.mp4",
      title: "Dan Toma",
      path: "/dan-toma",
      btnTitle: "See More",
      //   className: "",
      description:
        "Imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n’a pas fait que survivre cinq siècles, mais",
    },
  ];

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }
    setActiveIndex(newIndex);
  };

  return (
    <div className="slider">
      <div
        className="inner"
        style={{ transform: `translate(-${activeIndex * 100}%)` }}
      >
        {items.map((item, index) => {
          return <SliderItem item={item} key={index} width={"100%"} />;
        })}
      </div>
      <div className="slider-buttons">
        <button
          onClick={() => updateIndex(activeIndex - 1)}
          className="button-arrow"
        >
          <span className="btn-arrow-icon btn-arrow-icon-left">
            <BsArrowLeft />
          </span>{" "}
          prev
        </button>

        {/* <div className="indicators">
            {items.map((item, index) => (
              <ProgressBar item={item} index={index} />
            ))}
          </div> */}

        <div className="indicators">
          {items.map((item, index) => {
            return (
              <button
                onClick={() => {
                  updateIndex(index);
                }}
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
          onClick={() => updateIndex(activeIndex + 1)}
          className="button-arrow"
        >
          next{" "}
          <span className="btn-arrow-icon btn-arrow-icon-right">
            <BsArrowRight />
          </span>
          {/* <span className="arrow-right"></span> */}
        </button>
      </div>
    </div>
  );
};
