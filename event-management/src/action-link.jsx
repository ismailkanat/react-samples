import React from "react";

function ActionLink(props) {
  function handleClick(event) {
    event.preventDefault();
    alert("clicked");
  }

  return <a href='http://www.scoutto.com' onClick={handleClick}>{props.text}</a>;
}

export default ActionLink;
