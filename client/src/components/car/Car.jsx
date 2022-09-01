import React from "react";
import Button from "../button/Button";
import { NavLink } from "react-router-dom";
import image1 from "./pexels-avinash-patel-544542.jpg";
import Search from "../../search/Search";

function Car({ car }) {
  return (
    <>
      <div>
        <ul className="flex justify-between py-7 px-5">
          <li className="text-2xl font-light text-gray-500">
            Latest <span className="font-bold text-neutral-800">Cars</span>
          </li>
        </ul>
        <div className="bg-white-900  grid grid-cols-3 gap-2">
          <div className="w-64 border-2">
            <div className="relative">
              <img
                src={image1}
                alt="..."
                className="hover:opacity-50 hover:cursor-pointer"
              />
              <NavLink to="details" className="relative bottom-20">
                <Button color="bg-red-900" content="Details" />
              </NavLink>
            </div>
            <ul className="p-2">
              <li className="border-b-2 border-red-900 text-left my-2">
                Nissan Patrol 2013
              </li>
              <li className="border-b-2 border-red-900">
                <ul className="flex justify-between  my-2">
                  <li>1.4i TS 5Dr</li>
                  <li>23000 Miles</li>
                </ul>
              </li>
              <li className="text-red-900 border-b-2 border-red-900 text-left  my-2">
                $15000
              </li>
            </ul>
          </div>

          <div div className="w-64 border-2">
            <div className="relative">
              <img
                src={image1}
                alt="..."
                className="hover:opacity-50 hover:cursor-pointer"
              />
              <NavLink to="details" className="relative bottom-20">
                <Button color="bg-red-900" content="Details" />
              </NavLink>
            </div>
            <ul className="p-2">
              <li className="border-b-2 border-red-900 text-left my-2">
                Nissan Patrol 2013
              </li>
              <li className="border-b-2 border-red-900">
                <ul className="flex justify-between  my-2">
                  <li>1.4i TS 5Dr</li>
                  <li>23000 Miles</li>
                </ul>
              </li>
              <li className="text-red-900 border-b-2 border-red-900 text-left  my-2">
                $15000
              </li>
            </ul>
          </div>

          <div div className="w-64 border-2">
            <div className="relative">
              <img
                src={image1}
                alt="..."
                className="hover:opacity-50 hover:cursor-pointer"
              />
              <NavLink to="details" className="relative bottom-20">
                <Button color="bg-red-900" content="Details" />
              </NavLink>
            </div>
            <ul className="p-2">
              <li className="border-b-2 border-red-900 text-left my-2">
                Nissan Patrol 2013
              </li>
              <li className="border-b-2 border-red-900">
                <ul className="flex justify-between  my-2">
                  <li>1.4i TS 5Dr</li>
                  <li>23000 Miles</li>
                </ul>
              </li>
              <li className="text-red-900 border-b-2 border-red-900 text-left  my-2">
                $15000
              </li>
            </ul>
          </div>

          <div div className="w-64 border-2">
            <div className="relative">
              <img
                src={image1}
                alt="..."
                className="hover:opacity-50 hover:cursor-pointer"
              />
              <NavLink to="details" className="relative bottom-20">
                <Button color="bg-red-900" content="Details" />
              </NavLink>
            </div>
            <ul className="p-2">
              <li className="border-b-2 border-red-900 text-left my-2">
                Nissan Patrol 2013
              </li>
              <li className="border-b-2 border-red-900">
                <ul className="flex justify-between  my-2">
                  <li>1.4i TS 5Dr</li>
                  <li>23000 Miles</li>
                </ul>
              </li>
              <li className="text-red-900 border-b-2 border-red-900 text-left  my-2">
                $15000
              </li>
            </ul>
          </div>
          <div div className="w-64 border-2">
            <div className="relative">
              <img
                src={image1}
                alt="..."
                className="hover:opacity-50 hover:cursor-pointer"
              />
              <NavLink to="details" className="relative bottom-20">
                <Button color="bg-red-900" content="Details" />
              </NavLink>
            </div>
            <ul className="p-2">
              <li className="border-b-2 border-red-900 text-left my-2">
                Nissan Patrol 2013
              </li>
              <li className="border-b-2 border-red-900">
                <ul className="flex justify-between  my-2">
                  <li>1.4i TS 5Dr</li>
                  <li>23000 Miles</li>
                </ul>
              </li>
              <li className="text-red-900 border-b-2 border-red-900 text-left  my-2">
                $15000
              </li>
            </ul>
          </div>
          <div div className="w-64 border-2">
            <div className="relative">
              <img
                src={image1}
                alt="..."
                className="hover:opacity-50 hover:cursor-pointer"
              />
              <NavLink to="details" className="relative bottom-20">
                <Button color="bg-red-900" content="Details" />
              </NavLink>
            </div>
            <ul className="p-2">
              <li className="border-b-2 border-red-900 text-left my-2">
                Nissan Patrol 2013
              </li>
              <li className="border-b-2 border-red-900">
                <ul className="flex justify-between  my-2">
                  <li>1.4i TS 5Dr</li>
                  <li>23000 Miles</li>
                </ul>
              </li>
              <li className="text-red-900 border-b-2 border-red-900 text-left  my-2">
                $15000
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Car;
