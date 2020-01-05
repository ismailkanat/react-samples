import React from "react";

class SampleButton extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = (param) => {
    console.log(param);
    console.log("clicked " + param);
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick.bind(this,"1")}>Click me</button>
      </div>
    );
  }
}

export default SampleButton;
