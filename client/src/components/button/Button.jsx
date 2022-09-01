import React from "react";

function Button({
  color = "bg-red-900",
  content = "Buy Now",
  width,
  disabled,
}) {
  return (
    <button
      className={`rounded ${color} px-7 py-2 text-white shadow-inner w-${
        width && width
      }`}
      disabled={disabled}
    >
      {content}
    </button>
  );
}

export default Button;
