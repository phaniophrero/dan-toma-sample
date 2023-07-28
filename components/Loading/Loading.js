import Image from "next/image";

export const Loading = () => {
  return (
    <div className="loading-container">
      <div className="logo-loading">
        <img
          // width={55}
          src="/images/logo-dan-toma.png"
          alt="logo dan toma"
        />
        <span className="loading-logo-text">DAN TOMA</span>
      </div>

      <div className="progress-bar">
        <div className="progress-bar-inner"></div>
      </div>
    </div>
  );
};
