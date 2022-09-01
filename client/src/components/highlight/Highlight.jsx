import React from "react";
import DealersHighlight from "./DealersHighlight";
import News from "./News";

function Highlight() {
  return (
    <div className="flex justify-between my-5 mx-4">
      <News />
      <DealersHighlight />
    </div>
  );
}

export default Highlight;
