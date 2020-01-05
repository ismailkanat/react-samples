import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

function LoginButton(props) {
  return <button style={{marginLeft:20}} onClick={props.onClick}>Login</button>;
}

function LogoutButton(props) {
  return <button style={{marginLeft:20}} onClick={props.onClick}>Logout</button>;
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {
      loginState: false
    };
  }

  handleLoginClick() {
    this.setState({ loginState: true });
  }

  handleLogoutClick() {
    this.setState({ loginState: false });
  }

  render() {
    const isLogged = this.state.loginState;
    let button = isLogged ? (
      <LogoutButton onClick={this.handleLogoutClick}></LogoutButton>
    ) : (
      <LoginButton onClick={this.handleLoginClick}></LoginButton>
    );

    return (
      <div>
        Currently user status : {isLogged ? "Online" : "Offline"}
        {button}
      </div>
    );
  }
}

ReactDOM.render(<LoginControl></LoginControl>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
