export function filterData(searchText, restaurants) {
    const filteredData = restaurants.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filteredData;
  }


  export function convert(price){
    let numPrice=parseFloat((price-0)/100);
    return parseFloat(numPrice);
  }

 
  