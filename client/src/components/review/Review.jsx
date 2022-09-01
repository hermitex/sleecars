import React, { useRef, useState } from "react";
import { useEffect } from "react";

const reviews = [
  {
    id: 0,
    review:
      "Words can be like X-rays, if you use them properly—they'll go through anything. You read and you're pierced.",
    author: "Test",
    date: new Date().toDateString(),
  },
  {
    id: 1,
    review:
      "Words can be like X-rays, if you use them properly—they'll go through anything. You read and you're pierced.",
    author: "Aldous Huxley",
    date: new Date().toDateString(),
  },
  {
    id: 2,
    review:
      "Words can be like X-rays, if you use them properly—they'll go through anything. You read and you're pierced.",
    author: "Aldous Huxley",
    date: new Date().toDateString(),
  },
  {
    id: 3,
    review:
      "Words can be like X-rays, if you use them properly—they'll go through anything. You read and you're pierced.",
    author: "Aldous Huxley",
    date: new Date().toDateString(),
  },
  {
    id: 4,
    review:
      "Words can be like X-rays, if you use them properly—they'll go through anything. You read and you're pierced.",
    author: "Aldous Huxley",
    date: new Date().toDateString(),
  },
];

function Review() {
  const [review, setReview] = useState(0);

  useEffect(() => {
    const intId = setInterval(() => {
      setReview((review) => review + 1);
    }, 4000);
    return () => {
      clearInterval(intId);
    };
  }, []);

  function updateReview() {
    if (review === reviews.length - 1) {      
        setReview(0);     
    }
  }

  updateReview();

  return (
    <div className="w-72">
      <ul className="flex justify-between my-3 py-3 px-5">
        <li className="text-2xl font-light text-gray-500">
          Customer <span className="font-bold text-neutral-800">Reviews</span>
        </li>
      </ul>
      <fieldset className="border-2 border-gray-200 p-2 ">
        <legend className="flex justify-between">
          <div
            className={`h-3 w-3 bg-${
              review == 0 ? "red" : "gray"
            }-600 rounded mr-1`}
          ></div>
          <div
            className={`h-3 w-3 bg-${
              review == 1 ? "red" : "gray"
            }-600 rounded mr-1`}
          ></div>
          <div
            className={`h-3 w-3 bg-${
              review == 2 ? "red" : "gray"
            }-600 rounded mr-1`}
          ></div>
          <div
            className={`h-3 w-3 bg-${review == 3 ? "red" : "gray"}-600 rounded`}
          ></div>
        </legend>
        <figure>
          <blockquote cite="">
            <p>{reviews[review].review}</p>
          </blockquote>
          <figcaption className="text-red-900 my-2">
            — {reviews[review].author}
          </figcaption>
        </figure>
      </fieldset>
    </div>
  );
}

export default Review;
