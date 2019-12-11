import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
return(
  <div className="userOutput">
  <p> My username is {props.username}</p>
  <p>I am paragraph 2</p>
  </div>
);
};

export default userOutput;
