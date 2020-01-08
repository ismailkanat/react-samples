import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

function FancyDialog(props) {
  return (
    <div className={"FancyBorder fancy-" + props.color}>{props.children} </div>
  );
}

function WelcomeDialog(props) {
  return (
    <FancyDialog color="blue">
      <h1 className="Dialog-title">Hoşgeldiniz</h1>
      <p className="Dialog-message">
        Uzay aracımızı ziyaret ettiğiniz için teşekkür ederiz!
      </p>
    </FancyDialog>
  );
}

function SplitPane(props)
{
    return(
        <div className='area'>
            <div className='left'>{props.left}</div>
            <div className='right'>{props.right}</div>
        </div>
    );
}


function Application (props)
{
    return(
        <SplitPane left={<h1>h1 bu</h1>} right={<h3>h3bu</h3>}></SplitPane>
    );
}







function Dialog(props)
{
    return(
        <FancyDialog color='blue'>
            <h1>{props.title}</h1>
            <p>{props.message}</p>
            {props.children}
        </FancyDialog>
    );
}

class SignupDialog extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            login : ''
        };
    }

    onChange = (e) => {
        this.setState({login : e.target.value});
    }

    handleSignUp = ()=>{
        alert("Welcome aboard:" + this.state.login);
    };

    render()
    {
        return(
                <Dialog title='Mars Keşif Programı' message='Size nasıl başvurabiliriz'>
                    <input value={this.state.login} onChange={this.onChange}></input>
                    <button onClick={this.handleSignUp}>
          Beni kaydet!
        </button>
                </Dialog>
        );
    }

}


ReactDOM.render(<SignupDialog />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
