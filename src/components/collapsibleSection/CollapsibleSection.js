import React from "react";
import Direction from "../direction/Direction";
import Box from "../direction/Box";
import Icon from "../icon/Icon";
import Button from "../button/Button";

export default class CollapsibleSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    }
    this.toggleCollapsed = this.toggleCollapsed.bind(this);
    this.classnames = [
      "collapsibleSection",
      this.props.decoration
    ];
  }

  toggleCollapsed() {
    this.setState({collapsed : !this.state.collapsed});
  }

  render() {
    return (
      <div className={this.classnames.join(" ")}>
        <Direction stretch classes="heading">
          <Box stretch vAlign="middle">
            Some explanation
          </Box>
          <Button 
            size="l" 
            decoration={this.props.decoration} 
            styleName="transparent" 
            noReserveSpace
            click={() => {this.toggleCollapsed()}}
          >
            {[<Icon name={`${this.state.collapsed ? 'times-s' : 'life-ring-l'}`}/>]}
          </Button>
        </Direction>
        <div className={"content " + `${this.state.collapsed ? 'collapsed' : ''}`}>
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quam urna, vehicula eu lorem sed, lobortis iaculis nulla. Nullam nulla diam, cursus eu est et, rutrum dictum tortor.</div>
          <div>Phasellus sed interdum nisi, et hendrerit tellus. Quisque mattis lobortis tempor. Proin a nulla nec orci malesuada lacinia.</div>
        </div>
      </div>
    );
  }
};
