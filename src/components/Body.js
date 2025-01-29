// @ts-nocheck
import RestaurantCard, { withOfferLabel } from "./RestaurantCard";
import stays from "../utils/mockData";
import { useEffect, useState } from "react";
import { SWIGGY_API_URL, SWIGGY_REST_API_PATH } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=28.6139298&lng=77.2088282&carousel=true&third_party_vendor=1"
    );

    const json = await data.json();

    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  RestaurantCardPromoted = withOfferLabel(RestaurantCard);

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <p>You are offline.</p>;
  }
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search flex">
          <input
            className=" border border-black border-solid m-4 rounded-lg"
            type="text"
            data-testid="searchInput"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="m-4 bg-blue-200 p-3 rounded-lg hover:bg-blue-300"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
          <div className="flex items-center">
            <button
              className="filter-btn bg-green-100 rounded-lg p-3 hover:bg-green-200"
              onClick={() => {
                const filteredList = filteredRestaurants.filter(
                  (res) => res.info.avgRating > 4.2
                );
                setFilteredRestaurant(filteredList);
              }}
            >
              Highly Rated Restaurants
            </button>
          </div>
        </div>
      </div>
      <div className="property-container flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant?.info?.id}
          >
            {restaurant.info.avgRating > 4.2 ? (
              <RestaurantCardPromoted resData={restaurant?.info} />
            ) : (
              <RestaurantCard resData={restaurant?.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
