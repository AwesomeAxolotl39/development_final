import './App.css';
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";
import FavList from "./components/FavList";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';

bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});

//1 sorting feature = time (vs popularity)

function App() {

  const [type, setType] = useState("All");

  //function to selectFilter type
  const selectFilterType = (val) => {
    setType(val);
  };

  //function to check which items match filter type
  const matchesFilterType = (item) => {
    // if no fiter selected, show all items
    if (type === "All") {
      return true
    } else if (type === "df" && item.df === "yes") {
      return true
    } else if (type === "gf" && item.gf === "yes") {
      return true
    } else {
      return false
    };

  }

  // get only bakeryData that passed filter
  const filteredData = bakeryData.filter(matchesFilterType)

  const [sort, setSort] = useState("Popularity");

  const selectSortType = (feature) => {
    setSort(feature);
  };

  const sortData = ((a, b) => {
    if (sort === "Popularity") {
      return b.pop - a.pop
    } else if (sort === "Time") {
      return a.time - b.time
    };
  })

  // code to sort items by popularity vs cooktime
  const sortedData = filteredData.sort(sortData)

  //code for adding items to favorites list
  const [favList, setFavList] = useState([]);

  const handleInput = (item) => {
    //don't add to list if item is already in list
    if (favList.filter(thing => thing.name === item.name).length > 0) {
      return;
    } else {
      setFavList([...favList, { name: item.name, time: item.time, key: Date.now() }]);
    };
  };

  //remove item from fav list when clicked
  const removeM = (key) => {
    setFavList(favList.filter((favList) => key !== favList.key));
  };

  return (
    <div className="App">
      <div class='d-flex row'>
        <div class='TopBar'>
          {/* <image src='/images/logo.png' alt='picture of a cupcake'></image> */}
          <h1 class='TopText'>Recipe Finder</h1>
        </div>
        <div class='MainGrid'>
          <div class='flex SideBar'>
            <h4>Filter By:</h4>
            <div class='btnPane'>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="All"
                  name="radio-buttons-group"
                  class='btnPane'>
                  <FormControlLabel value="Dairy Free" onClick={() => selectFilterType('df')} control={<Radio />} label="Dairy Free" />
                  <FormControlLabel value="Gluten Free" onClick={() => selectFilterType('gf')} control={<Radio />} label="Gluten Free" />
                  <FormControlLabel value="All" onClick={() => selectFilterType('All')} control={<Radio />} label="All" />
                </RadioGroup>
              </FormControl>
            </div>
            <h4>Order By:</h4>
            <div class='btnPane'>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="Popularity"
                  name="radio-buttons-group"
                  class='btnPane'>
                  <FormControlLabel value="Popularity" onClick={() => selectSortType('Popularity')} control={<Radio />} label="Popularity" />
                  <FormControlLabel value="Time" onClick={() => selectSortType('Time')} control={<Radio />} label="Time" />
                </RadioGroup>
              </FormControl>
            </div>
            <h4>Favorites List:</h4>
            <p>Click on heart to remove item from favorites list</p>
            <FavList favList={favList} remove={removeM} />
          </div>
          <div class='d-flex RecipeGrid'>
            {sortedData.map((item) =>
              (<BakeryItem item={item} handleInput={handleInput} />))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
