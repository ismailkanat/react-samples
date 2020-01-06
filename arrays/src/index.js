import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

function ListItem(props) {
  return <li>{props.value}</li>;
}

function NumberList(props) {
  if (props.values == null) return null;

  const list = props.values.map(number => <ListItem key={(number * 2).toString()}>{number * 3}</ListItem>);

  return (
      <ul>
          {props.values.map(number => <ListItem key={(number * 2).toString()} value={number * 3}></ListItem>)}
      </ul>
  );

//   return (
//       <ul>{props.values.map(number => <ListItem key={number * 2} value={number * 3})}</ul>
//   );
}

function List(props) {
  if (props.values == null) return null;
  const valueList = props.values;

  const numberList = valueList.map(number => <li key={number}> {number}</li>);

  return <ul>{numberList}</ul>;
}

const arrays = [1, 2, 3, 4, 5, 6, 7, 8];

ReactDOM.render(<NumberList values={arrays} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
