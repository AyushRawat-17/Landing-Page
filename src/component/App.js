import React from "react";
import Upper from "./Upper";
import Lower from "./Lower";


function App() {
  return (
    <div className="main-container">
      <Upper
        head1="Join our community"
        head2="30-day, hassle-free money back guarantee"
        shead1="Gain access to our full library of tutorials along with expert code reviews.Perfect for any developers who are serious about honing their skills."
      />
      <Lower/>
    </div>
  );
}

export default App;
