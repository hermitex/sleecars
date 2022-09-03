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
              className="prev hover:cursor-pointer hover:bg-blue-800 rounded-sm text-2xl text-center text-blue-700 hover:text-white bg-gray-900 mr-2 px-3"
              id="prev"
              onClick={handleClick}
              type="submit"
            >
              <ion-icon name="arrow-dropleft" />
            </button>
            <button
              className="next hover:cursor-pointer hover:bg-blue-800 rounded-sm text-2xl text-center text-blue-700 hover:text-white bg-gray-900 px-3"
              id="next"
              onClick={handleClick}
              type="submit"
            >
              <ion-icon name="arrow-dropright" />
            </button>
          </li>
        </ul>
      </div>
      <div className="flex flex-row justify-center my-2 absolute bottom-0 left-0 right-0">
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
