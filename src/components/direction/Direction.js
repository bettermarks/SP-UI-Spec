import React from "react";
import Box from "./Box";

export default ({
  children,
  fullsize,
  vertical,
  stretch,
  paddingScheme
  }) => {
  stretch = stretch || fullsize; //fullsize implies stretch
  let className = [
    vertical ? "vLayout":"hLayout",
    fullsize ? "fullsize" : "",
    stretch ? "stretch" : "",
    paddingScheme ? `padding-scheme-${paddingScheme}` : ""
  ];

  return (
    <div className={className.join(" ")}>
      {children}
    </div>
  );
};
