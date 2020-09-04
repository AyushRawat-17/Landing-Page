import React from "react";

function Left(props) {
  return (
    <div className="left-container">
      <div className="left-container-content">
        <h5>{props.head1}</h5>
        <h3>{props.head2}</h3>
        <span>&nbsp;{props.head3}</span>
        <h5>{props.shead}</h5>
        <button type="button" className="btn btn-success lower-button">{props.button}</button>
      </div>
    </div>
  );
}

export default Left;
