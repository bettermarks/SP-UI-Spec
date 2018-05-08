import React from "react";
import Direction from "../direction/Direction";
import Box from "../direction/Box";
import Icon from "../icon/Icon";
import Button from "../button/Button";

export default class QuitModalContent extends React.Component {
  constructor(props){
    super(props);
    props.breakPointHandler(450);
  }

  render() {
    return (
      <Direction vertical stretch classes="quitmodalcontent">
        <Direction stretch classes="title">
          <Button size="l" decoration="action" styleName="transparent">
            {[<Icon name="arrow-left-l" />]}
          </Button>
          <Box stretch vAlign="middle" classes="title-text">My Modal Title</Box>
        </Direction>
        <Box stretch >
          <div className="content">
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quam urna, vehicula eu lorem sed, lobortis iaculis nulla. Nullam nulla diam, cursus eu est et, rutrum dictum tortor.</div>
            <div>Phasellus sed interdum nisi, et hendrerit tellus. Quisque mattis lobortis tempor. Proin a nulla nec orci malesuada lacinia.</div>
            <Button stretch size="l" decoration="action">{["Quit exercise series"]}</Button>
            <Button stretch size="l" decoration="warning">{["Restart exercise series"]}</Button>
            <Button stretch size="l" decoration="view">{["Don\'t quit"]}</Button>
          </div>
        </Box>
      </Direction>
    );
  }
};
