import React from "react";
import Right from "./Right";
import Left from "./Left";

function Lower() {
  return (
    <div className="lower-container">
      <Left
        head1="Monthly Subscription"
        head2="$29"
        head3="per month"
        shead="Full access for less than $1 a day"
        button="Sign Up"
       />
      <Right 
          head="Why Us"
          content="Tutorials by industry experts Peer & expert code review Coding
            exercises Access to our Github repos Community forum Flashcard decs
            New videos every week"
      />
    </div>
  );
}

export default Lower;
