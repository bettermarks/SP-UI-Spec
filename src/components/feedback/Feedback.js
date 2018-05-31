import React from "react";
import Box from "../direction/Box";
import MediaQuery from "react-responsive";

export default class Feedback extends React.Component {
  constructor(props) {
    super(props);

    this.classnames = [
      "feedback",
      this.props.decoration
    ];
  }

  render() {
    return (
      <div className={this.classnames.join(" ")}>
        <MediaQuery minWidth={700}>
          {(matches) => {
            if (matches) {
              return(
                <Box stretch vAlign="middle">
                  That is wrong
                </Box>
              )
            }
            else {
              return (
                <Box vAlign="middle">
                  That is wrong
                </Box>
              )
            }
          }}
        </MediaQuery>
      </div>
    );
  }
};
