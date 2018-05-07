import React from "react";
import Box from "./Box";

export default ({
  children,
  fullsize,
  vertical,
  stretch,
  paddingScheme,
  classes
  }) => {
  stretch = stretch || fullsize; //fullsize implies stretch
  let className = [
    vertical ? "vLayout":"hLayout",
    fullsize ? "fullsize" : "",
    stretch ? "stretch" : "",
    paddingScheme ? `padding-scheme-${paddingScheme}` : "",
    classes ? classes : ""
  ];

  return (
    <div className={className.join(" ")}>
      {children}
    </div>
  );
};
