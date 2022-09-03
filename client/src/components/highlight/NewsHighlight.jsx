import React from 'react';
import { NavLink } from 'react-router-dom';

function NewsHighlight() {
  return (
    <div
      className="flex gap-4 text-sm text-left mb-2"
      style={{ width: '48.5vw' }}
    >
      <div className="flex flex-col drop-shadow-sm text-white">
        <div className="bg-red-700 hover:bg-red-600 cursor-pointer px-3 py-2 w-20 text-center">
          25
        </div>
        <div className="bg-gray-700 hover:bg-gray-600 cursor-pointer px-3 py-2  w-20 text-center">
          Sep
        </div>
      </div>
      <p>
        <NavLink to="news">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia,
          minima aut. Qui provident maiores, animi doloremque cupiditate
          voluptas totam saepe est nemo odio labore iste hic inventore voluptate
          ab temporibus ...
        </NavLink>
      </p>
    </div>
  );
}

export default NewsHighlight;
