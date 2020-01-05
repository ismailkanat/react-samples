import React from "react";

function UserInfo(props) {
  return (
    <div>
      <img src={props.comment.avatar.avatar} className='avatar' alt='prop'></img>
      <p> Welcome {props.comment.name}</p>
    </div>
  );
}

export default UserInfo;
