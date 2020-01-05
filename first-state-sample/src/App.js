import React from "react";
import ReactDOM from 'react-dom'

import logo from "./logo.svg";
import "./App.css";

function App(props) {
  const element = (
    <div>
      <h1>Wilkommen</h1>
      <p>Current time : {new Date().toLocaleTimeString}</p>{" "}
    </div>
  );

  return (
    ReactDOM.render(element, document.getElementById('root'))
  )
}


export default App;
