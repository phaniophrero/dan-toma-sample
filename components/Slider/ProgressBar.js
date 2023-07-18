import { useState } from "react";

const ProgressBar = ({ item, index }) => {
  let [sqSize, setSqSize] = useState(25);
  let [percentage, setPercentage] = useState(0);
  let [strokeWidth, setStrokeWidth] = useState(3);
  let [trigger, setTrigger] = useState(false);
  let [barIndex, setBarIndex] = useState(0);

  let bars = Array(item).fill(1);
  let timer = 6000;

  const barTriggerHandler = () => {
    setTrigger(!trigger);
  };

  if (trigger) {
    setTimeout(() => {
      percentage < 99 ? setPercentage(percentage + 1) : setPercentage(0);

      if (percentage === 99) {
        barIndex < item.length - 1 ? setBarIndex(barIndex + 1) : setBarIndex(0);
      }
    }, timer / 100);
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

  //   const updateIndex = (newIndex) => {
  //     if (newIndex < 0) {
  //       newIndex = 0;
  //     } else if (newIndex >= item.length) {
  //       newIndex = item.length - 1;
  //     }
  //     setBarIndex(newIndex);
  //   };

  return (
    <>
      <div className="circle-static"></div>
      <svg
        key={index}
        width={sqSize}
        height={sqSize}
        viewBox={viewBox}
        onClick={() => barTriggerHandler()}
        fill="transparent"
        stroke="#0062ff"
      >
        {index === barIndex ? (
          <>
            <circle
              className="circle-progress"
              cx={sqSize / 2}
              cy={sqSize / 2}
              r={radius}
              strokeWidth={`${strokeWidth}px`}
              // Start progress marker at 12 O'Clock
              transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
              style={{
                strokeDasharray: dashArray,
                strokeDashoffset: dashOffset,
              }}
            />
          </>
        ) : null}
        <circle
          className="circle-center"
          cx="50%"
          cy="50%"
          r="3"
          fill="#0062ff"
        />
      </svg>
    </>
  );
};

export default ProgressBar;
