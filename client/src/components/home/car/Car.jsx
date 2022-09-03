/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../button/Button';

import image1 from './pexels-aaron-curtis-119435.jpg';
import image2 from './pexels-albin-berlin-905554.jpg';
import image3 from './pexels-albin-berlin-919073.jpg';
import image4 from './pexels-jordan-hyde-1383834.jpg';
import image5 from './pexels-mike-b-93632.jpg';
import image6 from './pexels-avinash-patel-544542.jpg';

// const images = [image1, image2, image3, image4, image5, image5];

function Car() {
  return (
    <div>
      <ul className="flex justify-between py-7">
        <li className="text-2xl font-light text-gray-500 uppercase">
          Latest <span className="font-bold text-neutral-800">Cars</span>
        </li>
      </ul>
      <div className="bg-white-900  grid grid-cols-3 gap-4">
        <div className="w-62 border-2 group cursor-pointer">
          <div className="relative">
            <img
              src={image1}
              alt="..."
              className="group-hover:opacity-50 group-hover:cursor-pointer"
            />
            <NavLink
              to="details"
              className="absolute bottom-10 opacity-0 left-1 right-1  group-hover:opacity-95 transition duration-150 ease-in-out "
            >
              <Button
                color="bg-red-900"
                content="Details"
              />
            </NavLink>
          </div>
          <ul className="p-2">
            <li className="border-b-2 border-gray-300 text-left my-2">
              Nissan Patrol 2013
            </li>
            <li className="border-b-2 border-gray-300 my-2">
              <ul className="flex justify-between  my-2">
                <li>1.4i TS 5Dr</li>
                <li>23000 Miles</li>
              </ul>
            </li>
            <li className="text-red-900 border-b-2 border-gray-300 text-left  my-2">
              $15000
            </li>
          </ul>
        </div>

        <div className="w-62 border-2 group cursor-pointer">
          <div className="relative">
            <img
              src={image2}
              alt="..."
              className="group-hover:opacity-50 group-hover:cursor-pointer"
            />
            <NavLink
              to="details"
              className="absolute bottom-10 opacity-0 left-1 right-1  group-hover:opacity-95 transition duration-150 ease-in-out "
            >
              <Button
                color="bg-red-900"
                content="Details"
              />
            </NavLink>
          </div>
          <ul className="p-2">
            <li className="border-b-2 border-gray-300 text-left my-2">
              Nissan Patrol 2013
            </li>
            <li className="border-b-2 border-gray-300 my">
              <ul className="flex justify-between  my-2">
                <li>1.4i TS 5Dr</li>
                <li>23000 Miles</li>
              </ul>
            </li>
            <li className="text-red-900 border-b-2 border-gray-300 text-left  my-2">
              $15000
            </li>
          </ul>
        </div>

        <div className="w-62 border-2 group cursor-pointer">
          <div className="relative">
            <img
              src={image3}
              alt="..."
              className="group-hover:opacity-50 group-hover:cursor-pointer"
            />
            <NavLink
              to="details"
              className="absolute bottom-10 opacity-0 left-1 right-1  group-hover:opacity-95 transition duration-150 ease-in-out "
            >
              <Button
                color="bg-red-900"
                content="Details"
              />
            </NavLink>
          </div>
          <ul className="p-2">
            <li className="border-b-2 border-gray-300 text-left my-2">
              Nissan Patrol 2013
            </li>
            <li className="border-b-2 border-gray-300 my">
              <ul className="flex justify-between  my-2">
                <li>1.4i TS 5Dr</li>
                <li>23000 Miles</li>
              </ul>
            </li>
            <li className="text-red-900 border-b-2 border-gray-300 text-left  my-2">
              $15000
            </li>
          </ul>
        </div>

        <div className="w-62 border-2 group cursor-pointer">
          <div className="relative">
            <img
              src={image4}
              alt="..."
              className="group-hover:opacity-50 group-hover:cursor-pointer"
            />
            <NavLink
              to="details"
              className="absolute bottom-10 opacity-0 left-1 right-1  group-hover:opacity-95 transition duration-150 ease-in-out "
            >
              <Button
                color="bg-red-900"
                content="Details"
              />
            </NavLink>
          </div>
          <ul className="p-2">
            <li className="border-b-2 border-gray-300 text-left my-2">
              Nissan Patrol 2013
            </li>
            <li className="border-b-2 border-gray-300 my">
              <ul className="flex justify-between  my-2">
                <li>1.4i TS 5Dr</li>
                <li>23000 Miles</li>
              </ul>
            </li>
            <li className="text-red-900 border-b-2 border-gray-300 text-left  my-2">
              $15000
            </li>
          </ul>
        </div>
        <div className="w-62 border-2 group cursor-pointer">
          <div className="relative">
            <img
              src={image5}
              alt="..."
              className="group-hover:opacity-50 group-hover:cursor-pointer"
            />
            <NavLink
              to="details"
              className="absolute bottom-10 opacity-0 left-1 right-1  group-hover:opacity-95 transition duration-150 ease-in-out "
            >
              <Button
                color="bg-red-900"
                content="Details"
              />
            </NavLink>
          </div>
          <ul className="p-2">
            <li className="border-b-2 border-gray-300 text-left my-2">
              Nissan Patrol 2013
            </li>
            <li className="border-b-2 border-gray-300 my">
              <ul className="flex justify-between  my-2">
                <li>1.4i TS 5Dr</li>
                <li>23000 Miles</li>
              </ul>
            </li>
            <li className="text-red-900 border-b-2 border-gray-300 text-left  my-2">
              $15000
            </li>
          </ul>
        </div>
        <div className="w-62 border-2 group cursor-pointer">
          <div className="relative">
            <img
              src={image6}
              alt="..."
              className="group-hover:opacity-50 group-hover:cursor-pointer"
            />
            <NavLink
              to="details"
              className="absolute bottom-10 opacity-0 left-1 right-1  group-hover:opacity-95 transition duration-150 ease-in-out "
            >
              <Button
                color="bg-red-900"
                content="Details"
              />
            </NavLink>
          </div>
          <ul className="p-2">
            <li className="border-b-2 border-gray-300 text-left my-2">
              Nissan Patrol 2013
            </li>
            <li className="border-b-2 border-gray-300 my">
              <ul className="flex justify-between  my-2">
                <li>1.4i TS 5Dr</li>
                <li>23000 Miles</li>
              </ul>
            </li>
            <li className="text-red-900 border-b-2 border-gray-300 text-left  my-2">
              $15000
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Car;
