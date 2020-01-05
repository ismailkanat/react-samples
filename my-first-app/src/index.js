import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

function formatName(user) {
  if (user) return user.firstName + " " + user.lastName;
  else return "Undefined";
}

const user = {
  firstName: "Ismail",
  lastName: "Kanat"
};

const element = <h1>Hello, {formatName(user)}</h1>;
const element2 = React.createElement(
  "h3",
  { className: "greeting" },
  "Hello World!"
);

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById("root"));
}

// setInterval(tick, 1000);

function Welcome(props) {
  return (
    <div>
      <h1> Hello, {props.name}.</h1>
      <h3>Your age is {props.age}</h3>
    </div>
  );
}

function App() {
  return (
    <div>
      <Welcome name="Alice" age='30'></Welcome>
      <Welcome name="Hayk" age='35'></Welcome>
    </div>
  );
}

const funcElement = <Welcome name="Sara" age="29" />;
ReactDOM.render(<App />, document.getElementById("root"));

// ReactDOM.render(element2, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
