import React from "react";

function Button({ color = "bg-red-900", content = "Buy Now" }) {
  return (
    <button className={`rounded ${color} px-7 py-2 text-white shadow-inner`}>
      {content}
    </button>
  );
}

export default Button;
