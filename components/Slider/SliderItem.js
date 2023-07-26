import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { forwardRef } from "react";

export const SliderItem = forwardRef(({ item, index, width }, ref) => {
  return (
    <div className="slider-item" key={index} style={{ width: width }} ref={ref}>
      <section className="hero-video-area">
        <div className="text-bg">
          <span className={item.className ? "" : "bg-patrat"}></span>
          <div
            className={`${
              item.className === "centered-slide" ? "centered-slide" : "text"
            }`}
          >
            <h1 className="title">{item.title}</h1>
            <span className="line"></span>
            <p className="description">{item.description}</p>
            {item.path && (
              <Link
                className="slide-link"
                //   href={`${item.path}`}
                href="#"
              >
                {item.btnTitle}
                <span className="slide-link-icon">
                  <BsArrowRight />{" "}
                </span>
              </Link>
            )}
          </div>
        </div>
        <span className="video-filter"></span>
        <div className="video-wrapper">
          <video
            className="video"
            autoPlay={"autoplay"}
            preload="auto"
            muted
            loop
          >
            <source src={item.video} type="video/mp4" />
          </video>
        </div>
      </section>
    </div>
  );
});
