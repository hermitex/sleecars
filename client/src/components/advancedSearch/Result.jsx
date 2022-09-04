/* eslint-disable react/jsx-one-expression-per-line */
import { NavLink } from 'react-router-dom';
import React from 'react';

const cars = Array.from({ length: 42 });

function Result() {
  return (
    <div className="px-3 py-7 w-100 mx-auto">
      <div>
        <ul className="flex justify-between uppercase">
          <li className="text-2xl font-light text-gray-500">
            Top <span className="font-bold text-neutral-800">Brands</span>
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-7 mx-auto pt-5">
        {cars.map(() => (
          <div className="text-xs">
            <ul
              className="flex gap-4 hover:bg-slate-500 hover:cursor-pointer py-2 px-1 rounded-sm group border-b-2 border-gray-400 hover:border-red-800"
              style={{ width: 'fit-content' }}
            >
              <li className="group-hover:text-white">
                <NavLink
                  to="details"
                  className="hover:text-blue-800"
                >
                  <ion-icon name="arrow-dropright" />
                  Marcedes Benze X class
                </NavLink>
                {'    '}
                <cite>(57)</cite>{' '}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Result;
