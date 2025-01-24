import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

// @ts-nocheck
const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } = resData;

  return (
    <div className="property-container">
      <div className="property-card m-4 p-4 w-[250px] bg-gray-200 rounded-lg hover:bg-gray-100">
        <img
          className="property-logo rounded-lg"
          alt="res-logo"
          src={IMG_CDN_URL + cloudinaryImageId}
        />
        <h4 className="font-bold py-4 text-lg">{name}</h4>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
      </div>
    </div>
  );
};
export const withOfferLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute m-3 p-2 bg-black text-white rounded-lg">
          Most Rated
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
