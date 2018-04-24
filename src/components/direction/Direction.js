import React from "react";
import Box from "./Box";

export default ({
  children,
  fullsize,
  vertical,
  stretch,
  first,
  last
  }) => {
  stretch = stretch || fullsize; //fullsize implies stretch
  let className = [
    vertical ? "vLayout":"hLayout",
    fullsize ? "fullsize" : "",
    stretch ? "stretch" : ""
  ];

  return (
    <div className={className.join(" ")}>
      {first}
      <Box stretch={stretch}>{children}</Box>
      {last}
    </div>
  );
};
