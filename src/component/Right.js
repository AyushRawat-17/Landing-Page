import React from "react";

function Right(props) {
  return (
    <div className="right-container">
      <div className="right-container-content">
        <h3>{props.head}</h3>
        <div>
          <p>{props.content}</p>
        </div>
      </div>
    </div>
  );
}

export default Right;
