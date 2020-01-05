import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toLocaleTimeString()
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick();
    }, parseInt(this.props.updateAt) * 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date().toLocaleTimeString()
    });
  }
 
  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <p>Current time : {this.state.date}</p>
      </div>
    );
  }
}

function Main() {
  return (
    <div>
      <Clock updateAt="1"></Clock>
      <Clock updateAt="2"></Clock>
      <Clock updateAt="3"></Clock>
    </div>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
