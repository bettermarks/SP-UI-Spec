import React from "react";
import MediaQuery from "react-responsive";
import QuitModalContent from "./QuitModalContent";

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakpoint: 450
    };
    this.setBreakpoint = this.setBreakpoint.bind(this);

    switch(props.name){
      case "QuitModal":
        this.currentModal = <QuitModalContent breakPointHandler={this.setBreakpoint} />;
        break;
      default:
        break;
    }

  }

  setBreakpoint(bp){
    this.setState({
      breakpoint: bp
    });
  }

  render() {
    return (
      <div className="shadowbox" onClick={() => { openModal("") }}>
        <MediaQuery minWidth={this.state.breakpoint}>
          {(matches) => {
            if (matches) {
              return (
                <div className="modal desktop">
                  {this.currentModal}
                </div>
              )
            } else {
              return (
                <div className="modal">
                  {this.currentModal}
                </div>
              )
            }
          }}
        </MediaQuery>
      </div>
    );
  };
};
