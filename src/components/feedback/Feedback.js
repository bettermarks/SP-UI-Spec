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
        <MediaQuery minWidth={700}>
          {(matches) => {
            if (matches) {
              this.classnames.push('desktop');
              
              return(
                <div className={this.classnames.join(" ")}>
                <Box vAlign="middle">
                  That is wrong
                </Box>
                </div>
              )
            }
            else {
              return (
                <div className={this.classnames.join(" ")}>
                <Box stretch vAlign="middle">
                  That is wrong
                </Box>
                </div>
              )
            }
          }}
        </MediaQuery>

    );
  }
};
