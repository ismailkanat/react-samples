import React from "react";
import UserInfo from "./user-info";

function Content(props) {
  return (
    <div>
      <div className="user-block">
        <img className="avatar"></img>
        <UserInfo comment={props.comment}></UserInfo>
      </div>
      <div className="comment-area">
        <input></input>
      </div>
      <div className="comment-date">
          {props.comment.date}
      </div>
    </div>
  );
}

export default Content;
