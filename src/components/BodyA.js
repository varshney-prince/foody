import React, { useState, useEffect } from "react";
import { CardComponent } from "./Card";
import { restraurents, SWIGGY_API } from "../Config/config";
import { filterData } from "../utils/helper";
import useRestraurant from "../utils/useRestraurant";
import OfflineMessage from "./Offline";
import useOnline from "../utils/useOnline";
import ShimmerUI from "./Shimmer";

export const BodyComponent = () => {
  const [allRestraurentList, setAllRestraurentList] = useState(restraurents);
  const [searchText, setSearchText] = useState("");
  const [restraurentList, setRestraurentList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const isOnline = useOnline();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      if (isOnline) {
        setRestraurentList(await useRestraurant());
      }
      setIsLoading(false);
    };

    fetchData();
  }, [isOnline]);

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearch = () => {
    const data = filterData(searchText, allRestraurentList);
    setRestraurentList(data);
  };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          id="search"
          value={searchText}
          onChange={handleSearchChange}
          placeholder="Search..."
        />
        <button type="button" onClick={handleSearch} id="search-button">
          Search
        </button>
      </div>

      <div className="card-container">
        {isLoading || restraurentList.length === 0 ? (
          <ShimmerUI /> // Show shimmer when loading or when the list is empty
        ) : (
          Object.keys(restraurentList).map((key) => (
            <Link
              key={key}
              to={"/restraurant/" + restraurentList[key]?.info?.id}
            >
              <CardComponent
                key={key}
                card={restraurentList[key].info}
              />
            </Link>
          ))
        )}
      </div>
      {isOnline ? null : <OfflineMessage />}
    </>
  );
};
