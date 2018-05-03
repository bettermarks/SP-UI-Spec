import React from "react";

export default ({currentExercise, progress}) => {
  progress = Math.min(Math.max(progress, 0), 100) / 100 * 180;
  return (
    <div className="donut">
      <div className="donut-text">{currentExercise}</div>
      {progress > 0 && [
          <div className="mask">
            <div className="bar" style={{ transform: `rotate(${progress}deg)` }}>
            </div>
          </div>,
          <div className="mask" style={{ transform: `rotate(${progress}deg)` }}>
            <div className="bar" style={{ transform: `rotate(${progress}deg)` }}>
            </div>
          </div>
      ]}
    </div>
  );
};