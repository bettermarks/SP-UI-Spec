import React from "react";

export default ({ children, stretch }) => {
  let className = [
    "box",
    stretch ? "stretch" : ""
  ];
  return (
    <div className={className.join(" ")}>
      {children}
    </div>
  );
};
