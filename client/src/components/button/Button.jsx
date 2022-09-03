/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React from 'react';

function Button({
  color = 'bg-red-900',
  content = 'Buy Now',
  width,
  disabled,
}) {
  return (
    <button
      className={`rounded-sm ${color} px-7 py-2 text-white shadow-inner w-${
        width && width
      }`}
      disabled={disabled}
    >
      {content}
    </button>
  );
}

export default Button;
