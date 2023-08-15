import { useState, useEffect } from "react";
import { restraurents, SWIGGY_API } from "../Config/config";
import { json } from "react-router-dom";

const useRestraurant = () => {
  const [restaurantNames, setRestraurentNames] = useState(restraurents);
  
  useEffect(() => {
    console.log("api called");
    getRestaurants();
  }, []);

  async function getRestaurants() {

    try {
        console.log("getRes called");
        const apidata = await fetch(SWIGGY_API);
        if(!apidata.ok){
            const err = apidata.status;
            throw new Error(err);
        }
        else{
            const json = await apidata.json();
            console.log(json);

              // initialize checkJsonData() function to check Swiggy Restaurant data
            async function checkJsonData(jsonData) {
                for (let i = 0; i < jsonData?.data?.cards.length; i++) {
  
              // initialize checkData for Swiggy Restaurant data
                let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  
              // if checkData is not undefined then return it
                if (checkData !== undefined) {
                    return checkData;
                }
            }
            

          }
          const resData =await checkJsonData(json);
          setRestraurentNames(resData);

        }
        
        } catch (error) {
            console.log(error);
        
        }
  }

    return restaurantNames;
};

export default useRestraurant;
