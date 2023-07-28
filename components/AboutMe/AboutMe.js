import { useState } from "react";
import { Loading } from "../Loading/Loading";
import Image from "next/image";

const AboutMe = () => {
  return (
    <section className="section-about-me">
      <div className="section-about-me-header">
        <h1 className="section-about-me-title-top">
          Scrambled it to make a&apos;
        </h1>
        <p className="section-about-me-description-top">
          Of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged.
        </p>
      </div>

      <div className="section-about-me-container">
        <div className="section-about-me-wrapper">
          <span className="section-aboute-me-tag">ABOUT</span>
          <h1 className="section-about-me-title">Dan Toma</h1>
          {/* <span className="section-about-me-title-line"></span> */}
          <p className="section-about-me-description">
            Of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged.
          </p>
        </div>
        <div className="section-about-me-image-wrapper">
          <Image
            width={600}
            height={400}
            className="section-about-me-image"
            src="/images/dan-toma-profile.png"
            alt="dan toma profile image"
          />
        </div>
      </div>
    </section>
  );
};
export default AboutMe;
