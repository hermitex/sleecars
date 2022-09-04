import React from 'react';
import Review from '../home/review/Review';
import SimpleSearch from '../simpleSearch/SimpleSearch';

function Side() {
  return (
    <div className="w-auto">
      <SimpleSearch />
      <Review />
    </div>
  );
}

export default Side;
