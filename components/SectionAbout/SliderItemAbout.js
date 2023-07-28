import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { forwardRef } from "react";
import Image from "next/image";

export const SliderItemAbout = forwardRef(({ item, index, width }, ref) => {
  return (
    <div
      className="slider-about-item"
      key={index}
      style={{ width: width }}
      ref={ref}
    >
      <span className="slider-about-item-text-bg">
        <Image width={500} height={280} src={item.image} alt={item.title} />
      </span>
      <div className="slider-about-item-text">
        <h1 className="slider-about-item-title">{item.title}</h1>
        <p className="slider-about-item-description">{item.description1}</p>
        <p className="slider-about-item-description slider-about-item-description2">
          {item.description2}
        </p>
      </div>
      <div className="slider-about-image-wrapper">
        <h1
          className={`slider-about-image-number ${
            item.className === "slide-1"
              ? "slide-1"
              : item.className === "slide-2"
              ? "slide-2"
              : "slide-3"
          }`}
          style={{
            backgroundImage: `url(${item.image ? item.image : ""})`,
          }}
        >
          {item.id}
        </h1>
        <span className="slider-about-image-filter"></span>
        {/* <img className="slider-about-image" src={item.image} alt={item.title} /> */}
      </div>
    </div>
  );
});
