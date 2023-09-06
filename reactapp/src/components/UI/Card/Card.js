import React from "react";

function Card({ question, options }) {
  return (
    <div>
      <h4>{question}</h4>
      <div>
        {options.map((option, index) => (
          <button key={index}>{option}</button>
        ))}
      </div>
    </div>
  );
}

export default Card;
