import React from "react";

export default ({ children, stretch, paddingScheme }) => {
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
