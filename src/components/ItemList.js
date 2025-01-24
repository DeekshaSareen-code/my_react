import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="py-2">
            <span>{item.card.info.name}</span>
            <span>
              {" "}
              - ₹
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </span>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-9/12 p-1">
            <div className="absolute">
              <button className="m-auto p-2  bg-black  text-white shadow-lg rounded-lg">
                Add +{" "}
              </button>
            </div>
            <img src={IMG_CDN_URL + item.card.info.imageId}></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
