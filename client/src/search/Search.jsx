import React from "react";
import Button from "../components/button/Button";

function Search() {
  return (
    <div className="mb-3">
      <ul className="flex justify-between py-7 px-5">
        <li className="text-1xl font-light text-gray-500 uppercase mb-2">
          Find{" "}
          <span className="font-bold text-neutral-800">your new vehicle</span>
        </li>
      </ul>
      <form
        action=""
        className="flex flex-col justify-start text-left border-2 border-gray-200 p-2"
      >
        <div className="flex justify-between my-2">
          <label htmlFor="vehicle-type">Vehicle Type</label>
          <select className="px-5">
            <option>Any</option>
          </select>
        </div>
        <div className="flex justify-between my-2">
          <label htmlFor="vehicle-type">Model</label>
          <select className="px-5">
            <option>Any</option>
          </select>
        </div>
        <div className="flex justify-between my-2">
          <label htmlFor="vehicle-type">Brand</label>
          <select className="px-5">
            <option>BMW</option>
          </select>
        </div>
        <div className="flex justify-between my-2">
          <label htmlFor="vehicle-type">Price From</label>
          <select className="px-5">
            <option>Any</option>
          </select>
        </div>
        <div className="flex justify-between my-2">
          <label htmlFor="vehicle-type">Vehicle Type</label>
          <select className="px-5">
            <option>Any</option>
          </select>
        </div>
        <ul className="flex justify-between my-3">
          <li className="mr-1">
            <Button color="bg-blue-700" content="Search" />
          </li>
          <li className="text-gray-300">Advanced Search</li>
        </ul>
      </form>
    </div>
  );
}

export default Search;
