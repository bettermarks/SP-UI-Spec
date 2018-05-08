import React from "react";
import Direction from "../direction/Direction";
import Box from "../direction/Box";
import Icon from "../icon/Icon";
import Button from "../button/Button";

export default ({desktop, children}) => {
  let classNames = [
    "modal",
    desktop ? "desktop" : "mobile"
  ];
  return (
    <div className="shadowbox">
      <div className={classNames.join(" ")}>
        <Direction vertical stretch>
          <Direction stretch classes="modal-title">
            <Button size="l" decoration="action" styleName="transparent">
              {[<Icon name="arrow-left-l" />]}
            </Button>
            <Box stretch vAlign="middle" classes="modal-title-text">My Modal Title</Box>
          </Direction>
          <Box stretch classes="modal-content">
            <div>
              {children}
            </div>
          </Box>
        </Direction>
      </div>
    </div>
  );
};
