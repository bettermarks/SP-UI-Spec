import React from "react";

export default ({ children, stretch, vAlign }) => {
  let className = [
    "box",
    stretch ? "stretch" : "",
    vAlign ? `valign-${vAlign}` : ""
  ];
  return (
    <div className={className.join(" ")}>
      {children}
    </div>
  );
};
