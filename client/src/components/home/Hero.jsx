import React from 'react';

import image1 from './pexels-aaron-curtis-119435.jpg';

function Hero() {
  return (
    <div
      className="container bg-hero-pattern  bg-no-repeat bg-cover mx-auto bg-gray-900 pl-10"
      style={{
        height: '100vh',
        width: '100vw',
        backgroundImage: `linear-gradient(to right bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.9)), url(${image1})`,
      }}
    >
      <div className="flex py-10 pr-5">
        <ul>
          <li className="group text-white font-bold drop-shadow-md hover:cursor-pointer hover:bg-slate-800 bg-gray-900 my-2 p-2 rounded-sm text-2xl">
            <span className="text-green-900 group-hover:text-green-500 mr-1">
              <ion-icon name="checkmark-circle-outline" />
            </span>
            2012 BMW 1.8XRS Sedan 36000
          </li>
          <li className="group text-white font-bold drop-shadow-md hover:cursor-pointer hover:bg-slate-800 bg-gray-900 my-2 p-2 rounded-sm text-2xl">
            <span className="text-green-900 group-hover:text-green-500 mr-1">
              <ion-icon name="checkmark-circle-outline" />
            </span>
            2012 BMW 1.8XRS Sedan 36000
          </li>
          <li className="group text-white font-bold drop-shadow-md hover:cursor-pointer hover:bg-slate-800 bg-gray-900 my-2 p-2 rounded-sm text-2xl">
            <span className="text-green-900 group-hover:text-green-500 mr-1">
              <ion-icon name="checkmark-circle-outline" />
            </span>
            2012 BMW 1.8XRS Sedan 36000
          </li>
          <li className="flex flex-row">
            <div className="prev hover:cursor-pointer hover:bg-gray-700 rounded-sm text-2xl text-center text-blue-700 hover:text-green-500 bg-gray-900 mr-2 px-3">
              <ion-icon name="arrow-dropleft" />
            </div>
            <div className="next hover:cursor-pointer hover:bg-gray-700 rounded-sm text-2xl text-center text-blue-700 hover:text-green-500 bg-gray-900 px-3">
              <ion-icon name="arrow-dropright" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Hero;
