import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  console.log("entering", data);
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
      <div
        className=" cursor-pointer justify-between flex"
        onClick={handleClick}
      >
        <span className="text-black">
          {data.title}({data.itemCards.length})
        </span>
        <span>↓</span>
      </div>
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
