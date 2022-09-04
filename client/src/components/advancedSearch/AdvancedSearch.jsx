/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import Hero from '../hero/Hero';
import Result from './Result';
import Car from '../home/car/Car';
import Highlight from '../home/highlight/Highlight';
import Side from '../side/Side';

function AdvancedSearch() {
  return (
    <div className="">
      <Hero />
      <div
        className="container rounded border-2 border-gray-200 mx-auto"
        style={{ marginTop: '-3rem' }}
      >
        <form className=" bg-gray-200 py-7 px-5">
          <label
            htmlFor="search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
          >
            Search
          </label>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search car by brand, model, year..."
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
              Search
            </button>
          </div>
        </form>

        <Result />
        <div className="px-4">
          <div>
            <div className="flex flex-row justify-between gap-4">
              <Car
                light="top"
                dark="picks for you"
              />
              <Side />
            </div>
          </div>
        </div>
        <Highlight />
      </div>
    </div>
  );
}

export default AdvancedSearch;
