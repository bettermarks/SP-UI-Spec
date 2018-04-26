import React from "react";

export default ({children, contentType}) => {
  let className = [
    'contentBox',
    contentType ? `content-type-${contentType}` : ''
  ];
  return (
    <div className={className.join(" ")}>
      {children}
    </div>
  );
};
