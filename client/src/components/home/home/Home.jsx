/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { NavLink } from 'react-router-dom';

import Car from '../car/Car';
import Featured from '../featured/Featured';
import Hero from '../../hero/Hero';
import Side from '../../side/Side';
import Highlight from '../highlight/Highlight';
import Button from '../../button/Button';

function Home() {
  return (
    <div className="">
      <Hero />
      <div
        className="container rounded border-2 border-gray-200 mx-auto"
        style={{ marginTop: '-3rem' }}
      >
        <ul className="flex justify-between bg-gray-200 py-7 px-5">
          <li className="text-2xl font-light text-gray-500">
            Looking for a new vehicle?{' '}
            <span className="font-bold text-neutral-800">Start now!</span>
          </li>
          <li>
            <ul className="flex justify-between">
              <li className="mx-2">
                <NavLink to="sell-car">
                  <Button
                    color="bg-blue-700"
                    content="Sell your car"
                  />
                </NavLink>
              </li>
              <li>
                <NavLink to="search">
                  <Button
                    color="bg-red-700"
                    content="Search a car"
                  />
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
        <div className="px-4">
          <Featured />
          <div>
            <div className="flex flex-row justify-between gap-4">
              <Car />
              <Side />
            </div>
          </div>
        </div>
        <Highlight />
      </div>
    </div>
  );
}

export default Home;
