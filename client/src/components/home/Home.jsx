import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../button/Button";
import Car from "../car/Car";
import Review from "../review/Review";
import Search from "../../search/Search";
import TopCar from "../top-car/TopCar";
import Hero from "./Hero";
import Side from "../side/Side";

function Home() {
  return (
    <div className="">
      <Hero />
      <div className="mx-24 rounded border-2 border-gray-200">
        <ul className="flex justify-between bg-gray-200 py-7 px-5">
          <li className="text-2xl font-light text-gray-500">
            Looking for a new vehicle?{" "}
            <span className="font-bold text-neutral-800">Start now!</span>
          </li>
          <li>
            <ul className="flex justify-between">
              <li className="mx-2">
                <NavLink to="sell-car">
                  <Button color="bg-blue-700" content="Sell your car" />
                </NavLink>
              </li>
              <li>
                <NavLink to="search">
                  <Button color="bg-red-700" content="Search a car" />
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
        <div className="px-4">
          <TopCar />
          <div>
            <div className="flex flex-row justify-between gap-2">
              <Car />
              <Side />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
