import React from "react";

export default ({currentExercise, progress}) => {
  return (
    <div class="donut">
      <div class="donut-text">{currentExercise}</div>
      <div class="mask">
        <div class="bar">
        </div>
      </div>
      <div class="mask second">
        <div class="bar">
        </div>
      </div>
    </div>
  );
};