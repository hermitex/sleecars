/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const activeStyle = {
    textDecoration: 'underline',
    color: 'blue',
  };

  return (
    <div className="bg-neutral-900 ">
      <div className="text-white py-2 px-10">
        <ul className="flex justify-between">
          <li>
            Welcome visitor! You can <span className="mx-0.1" />
            <NavLink
              to="/login"
              className="text-blue-900 font-bold"
            >
              Login
            </NavLink>
            <span className="mx-0.5" />
            or
            <span className="mx-0.5" />
            <NavLink
              to="/signup"
              className="text-blue-900 font-bold"
            >
              Signup
            </NavLink>
          </li>

          <li>
            <address>
              <a
                href="tel:+254797165741"
                className="hover:text-red-400 hover:bg-blue-900 hover:p-2"
              >
                <ion-icon name="call" /> +254 797 165 741
              </a>
            </address>
          </li>
        </ul>
      </div>

      <header className="bg-neutral-800 py-3 px-10 text-white">
        <ul className="flex justify-between my-5">
          <li>
            <NavLink
              to="/"
              className="logo text-3xl font-bold text-blue-900 drop-shadow-lg shadow-red-900 italic"
              style={{ textShadow: '20px 0px 10px rgb(0, 0, 0)' }}
            >
              SLEECARS
            </NavLink>
          </li>
          <li>
            <input
              type="search"
              className="py-1 rounded-sm relative h-9 text-neutral-700 p-2 placeholder:italic italic "
              style={{ border: '1px solid gray', outline: 'none' }}
              placeholder="Start typing to search..."
            />
            <span className="bg-blue-900 py-1 px-3 absolute right-10 rounded-sm h-9 cursor-pointer">
              <ion-icon name="search" />
            </span>
          </li>
        </ul>

        <nav>
          <ul className="flex justify-between">
            <li className="hover:text-blue-800 font-bold uppercase">
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>|</li>

            <li className="hover:text-blue-800 font-bold uppercase">
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>|</li>

            <li className="hover:text-blue-800 font-bold uppercase">
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/showroom"
              >
                Showroom
              </NavLink>
            </li>
            <li>|</li>

            <li className="hover:text-blue-800 font-bold uppercase">
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/pages"
              >
                Pages
              </NavLink>
            </li>
            <li>|</li>

            <li className="hover:text-blue-800 font-bold uppercase">
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/rent"
              >
                Rent a car
              </NavLink>
            </li>
            <li>|</li>

            <li className="hover:text-blue-800 font-bold uppercase">
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/sell"
              >
                Sell your car
              </NavLink>
            </li>
            <li>|</li>

            <li className="hover:text-blue-800 font-bold uppercase">
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/news"
              >
                News
              </NavLink>
            </li>
            <li>|</li>

            <li className="hover:text-blue-800 font-bold uppercase">
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/search"
              >
                Search
              </NavLink>
            </li>
            <li>|</li>

            <li className="hover:text-blue-800 font-bold uppercase">
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
