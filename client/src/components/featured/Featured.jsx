/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../button/Button';
import image1 from './pexels-avinash-patel-544542.jpg';
import image2 from './pexels-mike-b-977003.jpg';
import image3 from './pexels-jesse-zheng-1213294.jpg';

function Featured() {
  return (
    <>
      <ul className="flex justify-between my-3 py-7">
        <li className="text-2xl font-light text-gray-500 uppercase">
          Featured <span className="font-bold text-neutral-800">Cars</span>
        </li>
      </ul>

      <div className="bg-white-900  flex justify-evenly gap-2">
        <div className="border-2 relative group">
          <div className="relative">
            <img
              src={image1}
              alt="..."
              className="opacity-90 hover:opacity-100 hover:cursor-pointer"
            />
            <div className="absolute right-0 top-0  ">
              <Button
                color="bg-red-700"
                content="Top"
                // eslint-disable-next-line react/jsx-boolean-value
                disabled={true}
              />
            </div>
          </div>
          <ul className="p-2 absolute top-0 bg-slate-400 opacity-0 group-hover:opacity-95">
            <li className=" text-left font-semibold">Nissan Patrol 2013</li>
            <li className="text-left font-bold">$15000</li>

            <li className="mb-1">
              <ul className="flex justify-between flex-col  my-2 text-sm text-left">
                <li className="hover:text-blue-600 border-b-2 my-1 border-gray-300">
                  <NavLink to="details">
                    More info <ion-icon name="arrow-dropright" />
                  </NavLink>
                </li>
                <li className="hover:text-blue-600 border-b-2 my-1 border-gray-300">
                  <NavLink to="details">
                    Add to wish list <ion-icon name="arrow-dropright" />
                  </NavLink>
                </li>
                <li className="hover:text-blue-600 border-b-2 my-1 border-gray-300">
                  <NavLink to="details">
                    Add to compare <ion-icon name="arrow-dropright" />
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div
          div
          className="border-2 relative group"
        >
          <div className="relative">
            <img
              src={image2}
              alt="..."
              className="opacity-90 hover:opacity-100 hover:cursor-pointer"
            />
            <div className="absolute right-0 top-0  ">
              <Button
                color="bg-green-700"
                content="New"
                // eslint-disable-next-line react/jsx-boolean-value
                disabled={true}
              />
            </div>
          </div>
          <ul className="p-2 absolute top-0 bg-slate-400 opacity-0 group-hover:opacity-95">
            <li className=" text-left font-semibold">Nissan Patrol 2013</li>
            <li className="text-left font-bold">$15000</li>

            <li className="mb-1">
              <ul className="flex justify-between flex-col  my-2 text-sm text-left">
                <li className="hover:text-blue-600 border-b-2 my-1 border-gray-300">
                  <NavLink to="details">
                    More info <ion-icon name="arrow-dropright" />
                  </NavLink>
                </li>
                <li className="hover:text-blue-600 border-b-2 my-1 border-gray-300">
                  <NavLink to="details">
                    Add to wish list <ion-icon name="arrow-dropright" />
                  </NavLink>
                </li>
                <li className="hover:text-blue-600 border-b-2 my-1 border-gray-300">
                  <NavLink to="details">
                    Add to compare <ion-icon name="arrow-dropright" />
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div
          div
          className="border-2 relative group"
        >
          <div className="relative">
            <img
              src={image3}
              alt="..."
              className="opacity-90 hover:opacity-100 hover:cursor-pointer"
            />
            <div className="absolute right-0 top-0  ">
              <Button
                color="bg-red-700"
                content="Top"
                // eslint-disable-next-line react/jsx-boolean-value
                disabled={true}
              />
            </div>
          </div>
          <ul className="p-2 absolute top-0 bg-slate-400 opacity-0 group-hover:opacity-95">
            <li className=" text-left font-semibold">Nissan Patrol 2013</li>
            <li className="text-left font-bold">$15000</li>

            <li className="mb-1">
              <ul className="flex justify-between flex-col  my-2 text-sm text-left">
                <li className="hover:text-blue-600 border-b-2 my-1 border-gray-300">
                  <NavLink to="details">
                    More info <ion-icon name="arrow-dropright" />
                  </NavLink>
                </li>
                <li className="hover:text-blue-600 border-b-2 my-1 border-gray-300">
                  <NavLink to="details">
                    Add to wish list <ion-icon name="arrow-dropright" />
                  </NavLink>
                </li>
                <li className="hover:text-blue-600 border-b-2 my-1 border-gray-300">
                  <NavLink to="details">
                    Add to compare <ion-icon name="arrow-dropright" />
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Featured;
