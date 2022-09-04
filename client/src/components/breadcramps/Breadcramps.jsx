import React from 'react';
import { NavLink } from 'react-router-dom';

function Breadcramps() {
  return (
    <nav className="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 navbar navbar-expand-lg navbar-light">
      <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
        <nav
          className="bg-grey-light rounded-md w-full"
          aria-label="breadcrumb"
        >
          <ol className="list-reset flex">
            <li>
              <NavLink
                to=""
                className="text-gray-500 hover:text-gray-600"
              >
                Home
              </NavLink>
            </li>
            <li>
              <span className="text-gray-500 mx-2 text-1xl">/</span>
            </li>
            <li>
              <NavLink
                to=""
                className="text-gray-500 hover:text-gray-600"
              >
                Rent
              </NavLink>
            </li>
          </ol>
        </nav>
      </div>
    </nav>
  );
}

export default Breadcramps;
