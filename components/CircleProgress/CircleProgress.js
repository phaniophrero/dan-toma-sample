const CircleProgress = ({ size, strokeWidth }) => {
  const viewBox = `0 0 ${size} ${size}`;
  const radius = (size - strokeWidth) / 2;

  return (
    <div className="circle-wrapper">
      <svg className="circle-svg" width="20" height="20" viewBox={viewBox}>
        <mask id="slider-bullet-mask">
          <circle
            cx="10"
            cy="10"
            r="9"
            strokeWidth="2"
            stroke="#fff"
            fill="none"
          ></circle>
        </mask>
        <g mask="url(#carousel-bullet-mask)">
          <circle
            fill="#fff"
            stroke="#ccc"
            className="bg"
            cx="10"
            cy="10"
            r="10"
          />
          <circle
            fill="none"
            className="meter"
            cx="10"
            cy="10"
            r="9"
            strokeWidth="3"
            style={{ strokeDashoffset: "0px" }} //aici se face tranzitia de completare a cercului
          />
        </g>
      </svg>
    </div>
  );
};

export default CircleProgress;
