import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "ismail"
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    var actualValue = e.target.value;
    this.setState(state => ({
      value:  actualValue
    }));
  }

  render() {
    return (
      <div>
        <input
          onChange={this.handleChange}
          defaultValue={this.state.value}
        ></input>

        <p>{this.state.value}</p>
      </div>
    );
  }
}

export default Input;
