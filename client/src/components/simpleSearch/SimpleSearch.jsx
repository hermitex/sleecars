/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../button/Button';

function SimpleSearch() {
  return (
    <div className="mb-3 w-72">
      <ul className="flex justify-between py-7">
        <li className="text-1xl font-light text-gray-500 uppercase mb-2">
          Find{' '}
          <span className="font-bold text-neutral-800">your new vehicle</span>
        </li>
      </ul>
      <form
        action=""
        className="flex flex-col justify-start text-left border-2 border-gray-200 p-2"
      >
        <div className="my-1">
          <label
            className="flex justify-between"
            htmlFor="vehicle-type"
          >
            Vehicle Type
            <select
              className="px-10 py-1 w-32 cursor-pointer border-2 hover:border-blue-400  rounded-sm"
              id="vehicle-type"
            >
              <option>Any</option>
              <option>Any</option>
            </select>
          </label>
        </div>
        <div className="my-1">
          <label
            className="flex justify-between"
            htmlFor="vehicle-model"
          >
            Model
            <select
              className="px-10 py-1 w-32 cursor-pointer border-2 hover:border-blue-400  rounded-sm"
              id="vehicle-model"
            >
              <option>Any</option>
            </select>
          </label>
        </div>
        <div className="my-1">
          <label
            className="flex justify-between"
            htmlFor="vehicle-brand"
          >
            Brand
            <select
              className="px-10 py-1 w-32 cursor-pointer border-2 hover:border-blue-400  rounded-sm"
              id="vehicle-brand"
            >
              <option>BMW</option>
            </select>
          </label>
        </div>
        <div className="my-1">
          <label
            className="flex justify-between"
            htmlFor="vehicle-price"
          >
            Price From
            <select
              className="px-10 py-1 w-32 cursor-pointer border-2 hover:border-blue-400  rounded-sm"
              id="vehicle-price"
            >
              <option>Any</option>
            </select>
          </label>
        </div>
        <div className="my-1">
          <label
            className="flex justify-between"
            htmlFor="vehicle-year"
          >
            Year From
            <select
              className="px-10 py-1 w-32 cursor-pointer border-2 hover:border-blue-400  rounded-sm"
              id="vehicle-year"
            >
              <option>Any</option>
              cursor-pointer bottom-1 hover:border-red-600{' '}
            </select>
          </label>
        </div>
        <ul className="flex justify-between my-3">
          <li className="mr-1">
            <Button
              color="bg-blue-700"
              content="Search"
            />
          </li>
          <NavLink to="search">
            <li className="text-gray-400 hover:text-blue-600">
              Advanced Search
            </li>
          </NavLink>
        </ul>
      </form>
    </div>
  );
}

export default SimpleSearch;
