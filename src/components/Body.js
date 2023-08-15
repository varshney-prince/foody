import React from "react";
import { CardComponent } from "./Card";
import { restraurents ,SWIGGY_API} from "../Config/config";
import { useState } from "react";
import{Link} from "react-router-dom"
import { filterData } from "../utils/helper";
import useRestraurant from "../utils/useRestraurant"
import OfflineMessage from "./Offline.js";
import useOnline from "../utils/useOnline.js";
import ShimmerUI from "./Simmer";


export const BodyComponent = () => {
  const [allRestraurentList, setAllRestraurentList] = useState(restraurents);
  const [searchText, setSearchText] = useState("");
  const [restraurentList, setRestraurentList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const dataAPi=async ()=>{
    setRestraurentList(await useRestraurant());
  };

  dataAPi();
  const isOnline=useOnline();

  

  const objectLength = Object.keys(restraurentList).length;

  if (!isOnline) {
    return <OfflineMessage />
  }

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
    console.log("Search query:", searchText);
  };

  return (
    <>
      <div className="search-container">
        <input type="text" key="search"
          id="search"
          value={searchText}
          onChange={handleSearchChange}
          placeholder="Search..."
        />
        <button
          type="button"
          key="btn"
          onClick={() => {
            const data = filterData(searchText, allRestraurentList);
            setRestraurentList(data);
          }}
          id="search-button"
        >
          Search
        </button>
      </div>
     
     
      <div className=" card-container">
        {Object.keys(restraurentList).map((key) => (
          <Link key={key} to={"/restraurant/"+restraurentList[key]?.info?.id}><CardComponent key={key} card={restraurentList[key].info} /></Link>
        ))}
      </div>
      
    </>
  );
};
