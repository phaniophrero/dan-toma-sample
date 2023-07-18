const CircleProgress = () => {
  return (
    <div className="circle-wrapper">
      <svg className="circle-svg" viewBox="0 0 100 100">
        <circle className="bg" cx="50" cy="50" r="40" />
        <circle className="meter" cx="50" cy="50" r="40" />
      </svg>
    </div>
  );
};

export default CircleProgress;
