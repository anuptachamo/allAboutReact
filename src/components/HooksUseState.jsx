import React, { useState } from "react";
import "../styles/HooksUseState.css";

const HooksUseState = () => {
  const [add, setAdds] = useState(100);
  const [subtract, setSubtract] = useState(100);
  return (
    <div>
      <h1>Numbers: {add} </h1>
      <button
        onClick={() => {
          setAdds(add +100);
        }}
      >
        Add
      </button>
      <h1>{subtract}</h1>
      <button onClick={()=>{
        setSubtract(subtract -100);
      }}>Subtract</button>
    </div>
  );
};

export default HooksUseState;
