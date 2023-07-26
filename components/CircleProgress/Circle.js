import { useState, useEffect } from "react";

const Circle = ({
  slides,
  nextSlide,
  autoplayInterval,
  activeIndex,
  setActiveIndex,
}) => {
  const [sqSize, setSqsize] = useState(20);
  const [percentage, setPercentage] = useState(0);
  const [strokeWidth, setStrokeWidth] = useState(2);
  const [trigger, setTrigger] = useState(false);
  const [barIndex, setBarIndex] = useState(0);

  //   let bars = Array(item).fill(1);
  let timer = 6000;

  const barTriggerHandler = () => {
    setTrigger(!trigger);
  };

  //   useEffect(() => {
  //     setTimeout(() => {
  //       percentage < 99 ? setPercentage(percentage + 1) : setPercentage(0);

  //       if (percentage === 99) {
  //         activeIndex < slides.length - 1
  //           ? setActiveIndex(activeIndex + 1)
  //           : setActiveIndex(0);
  //       }
  //     }, autoplayInterval / 100);
  //   }, [autoplayInterval, nextSlide]);

  if (trigger) {
    setTimeout(() => {
      percentage < 99 ? setPercentage(percentage + 1) : setPercentage(0);

      if (percentage === 99) {
        // activeIndex < slides.length - 1
        //   ? setActiveIndex(activeIndex + 1)
        // setActiveIndex(0);
      }
    }, autoplayInterval / 100);
  }

  // SVG centers the stroke width on the radius, subtract out so circle fits in square
  const radius = (sqSize - strokeWidth) / 2;
  // Enclose cicle in a circumscribing square
  const viewBox = `0 0 ${sqSize} ${sqSize}`;
  // Arc length at 100% coverage is the circle circumference
  const dashArray = radius * Math.PI * 2;
  // Scale 100% coverage overlay with the actual percent
  const dashOffset = dashArray - (dashArray * percentage) / 100;
  // console.log(dashOffset)

  return (
    <>
      {/* {slides?.map((bar, i) => { */}
      {/* return ( */}
      <svg
        // key={i}
        width={sqSize}
        height={sqSize}
        viewBox={viewBox}
        fill="transparent"
        stroke="#0062ff"
        onClick={() => barTriggerHandler()}
      >
        {/* {i === activeIndex ? ( */}
        <>
          <circle
            className="circle-progress"
            cx={sqSize / 2}
            cy={sqSize / 2}
            r={radius}
            strokeWidth={`${strokeWidth}px`}
            transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
            style={{
              strokeDasharray: dashArray,
              strokeDashoffset: dashOffset,
            }}
          ></circle>
          {/* <circle
                  className="circle-progress2"
                  cx={sqSize / 2}
                  cy={sqSize / 2}
                  r={radius}
                  strokeWidth={`${strokeWidth}px`}
                  //   fill="transparent"
                  //   stroke="#fff"
                ></circle> */}
        </>
        {/* ) : null} */}
        <circle
          className="cicle-center"
          cx="50%"
          cy="50%"
          r="3"
          fill="#0062ff"
        />
      </svg>
      {/* ); */}
      {/* })} */}
    </>
  );
};
export default Circle;
