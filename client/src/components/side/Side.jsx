import React from "react";
import Search from "../../search/Search";
import Review from "../review/Review";

function Side() {
  return (
    <div className="w-64">
      <Search />
      <Review />
    </div>
  );
}

export default Side;
