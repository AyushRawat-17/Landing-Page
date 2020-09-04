import React from "react";

function Upper(props) {
  return (
    <div className="upper-container">
      <h2>{props.head1}</h2>
      <h3>{props.head2}</h3>
      <h5>{props.shead1}</h5>
    </div>
  );
}

export default Upper;
