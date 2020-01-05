import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

function WarningMessage(props) {
  console.log(props.showWarning);
  if (!props.showWarning) {
    return null;
  }

  return <div className="warning">Uyarı !!!!</div>;
}

class PageInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showWarning: false
    };
  }

  handleClick = () => {
    this.setState(state => ({
      showWarning: !this.state.showWarning
    }));
  };

  render() {
    return (
      <div>
        <WarningMessage showWarning={this.state.showWarning}></WarningMessage>
        <button onClick={this.handleClick}>
          {this.state.showWarning ? "Hide" : "Show"}
        </button>
      </div>
    );
  }
}

ReactDOM.render(<PageInfo />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
