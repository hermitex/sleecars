/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import NewsHighlight from './NewsHighlight';

function News() {
  return (
    <div>
      <ul className="flex justify-between py-7  uppercase">
        <li className="text-2xl font-light text-gray-500">
          Latest <span className="font-bold text-neutral-800">News</span>
        </li>
      </ul>
      <NewsHighlight />
      <NewsHighlight />
      <NewsHighlight />
    </div>
  );
}

export default News;
