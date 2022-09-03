/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import Button from '../button/Button';

import Hero from '../hero/Hero';
import Car from '../home/car/Car';
import Highlight from '../home/highlight/Highlight';
import Result from '../home/search/Result';
import Side from '../home/side/Side';

function Search() {
  return (
    <div className="">
      <Hero />
      <div
        className="container rounded border-2 border-gray-200 mx-auto"
        style={{ marginTop: '-3rem' }}
      >
        <form className="flex justify-evenly bg-gray-200 py-7 px-5">
          <label
            htmlFor="search"
            id="search"
          >
            <input
              className="py-2 w-72 rounded-sm px-1 placeholder:italic"
              type="text"
              id="search"
              placeholder="Search car by brand, model, year..."
              style={{ border: '1px solid gray', outline: 'none' }}
            />
          </label>

          <label
            htmlFor="submit"
            id="submit"
          >
            {/* <input
              className="bg-red-700"
              type="submit"
              id="submit"
            /> */}

            <Button
              type="submit"
              id="submit"
              color="bg-red-700"
              content="Search a car"
            />
          </label>
        </form>
        <Result />
        <div className="px-4">
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

export default Search;
