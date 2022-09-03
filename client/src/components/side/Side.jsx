import React from 'react';
import Search from '../search/Search';
import Review from '../review/Review';

function Side() {
  return (
    <div className="w-auto">
      <Search />
      <Review />
    </div>
  );
}

export default Side;
