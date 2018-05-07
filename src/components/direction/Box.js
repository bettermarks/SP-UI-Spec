import React from "react";

export default ({ children, stretch, vAlign, classes }) => {
  let className = [
    "box",
    stretch ? "stretch" : "",
    vAlign ? `valign-${vAlign}` : "",
    classes ?  classes : ""
  ];
  return (
    <div className={className.join(" ")}>
      {children}
    </div>
  );
};
