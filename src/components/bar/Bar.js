import React from "react";
import _ from "lodash";

export default ({ children, barStyle, borderDirection, borderThickness }) => {
  borderDirection = _.defaultTo(borderDirection, "bottom");
  borderThickness = _.defaultTo(borderThickness, "thin");
  barStyle = _.defaultTo(barStyle, "default");
  let className = [
    `barStyle-${barStyle}`,
    `border-${borderDirection}`,
    `border-${borderThickness}`,
    ];
  
  return (
    <div className={className.join(" ")}>
      {children}
    </div>
  );
};
