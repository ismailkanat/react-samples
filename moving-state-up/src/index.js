import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

function BoilingDecision(props) {
  if (props.celsius >= 100) return <p>The water would boil</p>;
  else return <p>The water would not boil</p>;
}

const scales = {
  c: "Celcius",
  f: "Fahreneiht"
};

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const scale = this.props.scale;
    return (
      <form>
        <legend>Enter the value for type : {scales[scale]}</legend>
        <input
          value={this.props.temperature}
          onChange={this.handleChange}
        ></input>
      </form>
    );
  }
}

function toCelsius(fahrenheit) {
  debugger;
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
  debugger;
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: "",
      scale: ""
    };
    this.onCelciusChanged = this.onCelciusChanged.bind(this);
    this.onFahrenheitChanged = this.onFahrenheitChanged.bind(this);
  }

  onCelciusChanged(temperature) {
    this.setState({ scale: "c", temperature });
  }

  onFahrenheitChanged(temperature) {
    this.setState({ scale: "f", temperature });
  }

  onChange = e => {
    const val = e.target.value;
    this.setState({ temperature: val });
  };

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius =
      scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
      <div>
        <TemperatureInput
          temperature={celsius}
          onTemperatureChange={this.onCelciusChanged}
          scale="c"
        ></TemperatureInput>
        <TemperatureInput
          temperature={fahrenheit}
          onTemperatureChange={this.onFahrenheitChanged}
          scale="f"
        ></TemperatureInput>
        <BoilingDecision celsius={parseFloat(temperature)}></BoilingDecision>
      </div>
    );
  }
}

ReactDOM.render(<Calculator />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
