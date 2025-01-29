import React from "react";

import { IMG_CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addToCart } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //Dispatch an action
    dispatch(addToCart(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="fooditems"
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
              <button
                className="m-auto p-2  bg-black  text-white shadow-lg rounded-lg"
                onClick={() => {
                  handleAddItem(item);
                }}
              >
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
