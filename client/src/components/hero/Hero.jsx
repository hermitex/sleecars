/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';

import image1 from './pexels-aaron-curtis-119435.jpg';
import image2 from './pexels-albin-berlin-905554.jpg';
import image3 from './pexels-albin-berlin-919073.jpg';
import image4 from './pexels-jordan-hyde-1383834.jpg';
import image5 from './pexels-mike-b-93632.jpg';

const images = [image1, image2, image3, image4, image5, image5];

function Hero() {
  const [image, setImage] = useState(0);
  const [iconClass, setIconClass] = useState(null);

  useEffect(() => {
    const intId = setInterval(() => {
      // eslint-disable-next-line no-shadow
      setImage((image) => image + 1);
    }, 4000);
    return () => {
      clearInterval(intId);
    };
  }, []);

  function updateHeroImage() {
    if (image === images.length - 1) {
      setImage(0);
    }
  }

  function handleClick(event) {
    const { id } = event.target;
    if (id === 'next' && image < images.length - 1) {
      setImage((image) => image - 1);
    } else {
      setImage((image) => image + 1);
    }
  }

  function handleMouseEnter() {
    setIconClass('checkmark-circle');
  }

  function handleMouseLeave() {
    setIconClass('checkmark-circle-outline');
  }

  updateHeroImage();

  return (
    <div
      className="bg-hero-pattern  bg-no-repeat bg-cover mx-auto bg-gray-900 pl-10"
      style={{
        height: '90vh',
        backgroundImage: `linear-gradient(to right bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.9)), url(${images[image]})`,
      }}
    >
      <div className="flex py-10 pr-5">
        <ul>
          <li
            className="group text-white font-bold drop-shadow-md hover:cursor-pointer hover:bg-slate-800 bg-gray-900 my-2 p-2 rounded-sm text-2xl"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span className="text-green-900 group-hover:text-green-500 mr-1">
              <ion-icon name={iconClass} />
            </span>
            2012 BMW 1.8XRS Sedan 36000
          </li>
          <li
            className="group text-white font-bold drop-shadow-md hover:cursor-pointer hover:bg-slate-800 bg-gray-900 my-2 p-2 rounded-sm text-2xl"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span className="text-green-900 group-hover:text-green-500 mr-1">
              <ion-icon name={iconClass} />
            </span>
            2012 BMW 1.8XRS Sedan 36000
          </li>
          <li
            className="group text-white font-bold drop-shadow-md hover:cursor-pointer hover:bg-slate-800 bg-gray-900 my-2 p-2 rounded-sm text-2xl"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span className="text-green-900 group-hover:text-green-500 mr-1">
              <ion-icon name={iconClass} />
            </span>
            2012 BMW 1.8XRS Sedan 36000
          </li>

          <li
            className="group text-red-700 font-bold drop-shadow-md hover:cursor-pointer hover:bg-slate-800 bg-gray-900 my-2 p-2 rounded-sm text-2xl"
            style={{ width: 'fit-content' }}
          >
            $26,000
          </li>
          <li className="flex flex-row">
            <button
              type="button"
              onClick={handleClick}
              className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 rotate-180"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Icon description</span>
            </button>
            <button
              type="button"
              onClick={handleClick}
              className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Icon description</span>
            </button>
          </li>
        </ul>
      </div>
      <div
        className="flex flex-row justify-center absolute bottom-0 left-0 right-0"
        style={{ marginBottom: '5rem' }}
      >
        <div
          className={`hover:cursor-pointer hover:bg-blue-600 h-2 w-2 bg-${
            image === 0 ? 'blue' : 'red'
          }-600 rounded mr-1`}
        />
        <div
          className={`hover:cursor-pointer hover:bg-blue-600 h-2 w-2 bg-${
            image === 1 ? 'blue' : 'red'
          }-600 rounded mr-1`}
        />
        <div
          className={`hover:cursor-pointer hover:bg-blue-600 h-2 w-2 bg-${
            image === 2 ? 'blue' : 'red'
          }-600 rounded mr-1`}
        />
        <div
          className={`hover:cursor-pointer hover:bg-blue-600 h-2 w-2 bg-${
            image === 3 ? 'blue' : 'red'
          }-600 rounded mr-1`}
        />
        <div
          className={`hover:cursor-pointer hover:bg-blue-600 h-2 w-2 bg-${
            image === 4 ? 'blue' : 'red'
          }-600 rounded mr-1`}
        />
      </div>
    </div>
  );
}

export default Hero;
