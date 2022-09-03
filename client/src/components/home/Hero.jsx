import React from 'react';

import image1 from './pexels-aaron-curtis-119435.jpg';

function Hero() {
  return (
    <div
      className="container bg-hero-pattern  bg-no-repeat bg-cover mx-auto bg-gray-900"
      style={{
        height: '100vh',
        width: '100vw',
        backgroundImage: `linear-gradient(to right bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.9)), url(${image1})`,
      }}
    >
      <div className="flex py-10 pr-5">
        <ul>
          <li className="text-red-900 font-bold drop-shadow-md bg-gray-900 my-2 p-2 rounded-sm">
            2012 BMW 1.8XRS Sedan 36000
          </li>
          <li className="text-red-900 font-bold drop-shadow-md bg-gray-900 my-2 p-2 rounded-sm">
            2012 BMW 1.8XRS Sedan 36000
          </li>
          <li className="text-red-900 font-bold drop-shadow-md bg-gray-900 my-2 p-2 rounded-sm">
            2012 BMW 1.8XRS Sedan 36000
          </li>
          <li className="flex flex-row">
            <div className="prev hover:cursor-pointer hover:bg-gray-700 rounded-sm text-center text-blue-700 bg-gray-900 mr-2 px-3">
              <ion-icon name="arrow-dropleft" />
            </div>
            <div className="next hover:cursor-pointer hover:bg-gray-700 rounded-sm text-center text-blue-700 bg-gray-900 px-3">
              <ion-icon name="arrow-dropright" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Hero;
