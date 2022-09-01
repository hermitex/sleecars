import React from "react";

function Review() {
  return (
    <>
      <ul className="flex justify-between my-3 py-3 px-5">
        <li className="text-2xl font-light text-gray-500">
          Customer <span className="font-bold text-neutral-800">Reviews</span>
        </li>
      </ul>
      <fieldset className="border-2 border-gray-200 p-2 ">
        <legend className="flex justify-between">
          <div className="h-3 w-3 bg-red-600 rounded mr-1"></div>
          <div className="h-3 w-3 bg-gray-600 rounded mr-1"></div>
          <div className="h-3 w-3 bg-gray-600 rounded mr-1"></div>
          <div className="h-3 w-3 bg-gray-600 rounded"></div>
        </legend>
        <figure>
          <blockquote cite="">
            <p>
              Words can be like X-rays, if you use them properly—they’ll go
              through anything. You read and you’re pierced.
            </p>
          </blockquote>
          <figcaption className="text-red-900 my-2">—Aldous Huxley</figcaption>
        </figure>
      </fieldset>
    </>
  );
}

export default Review;
