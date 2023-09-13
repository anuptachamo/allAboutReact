import React, { useState } from "react";
import "../styles/HooksUseState.css";

const HooksUseState = () => {
  const [numbers, setNumbers] = useState(100);
  return (
    <div>
      <h1>Numbers: {numbers}</h1>
      <button
        onClick={() => {
          setNumbers(3000);
        }}
      >
        click Here
      </button>
    </div>
  );
};

export default HooksUseState;
