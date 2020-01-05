import React from "react";

class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleStatus: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      toggleStatus: !this.state.toggleStatus
    });
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.toggleStatus ? "ON" : "OFF"}
      </button>
    );
  }
}

export default ToggleButton;
