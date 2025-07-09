import React, { useState } from "react";
import Mealcards from "./Mealcards";
import foodImage from "../assets/food-background-image.jpg"; // 🔁 Make sure image path is correct

const Homepage = () => {
  const [data, setData] = useState();
  const [search, setSearch] = useState("");
  const [msg, setMsg] = useState("");

  const handleInput = (event) => {
    setSearch(event.target.value);
  };

  const myFun = async () => {
    if (search.trim() === "") {
      setMsg("Please Enter Something");
      return;
    }

    const get = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    );
    const jsonData = await get.json();
    setData(jsonData.meals);
    setMsg(jsonData.meals ? "" : "No recipe found.");
  };

  return (
    <>
      <div className={data ? "bannerSmall" : "bannerSection"}>
        <img
          src={foodImage}
          alt="Food Banner"
          className={data ? "bannerImageSmall" : "bannerImage"}
        />
        <div className="overlayContent">
          <h1>FOOD RECIPE APP</h1>
          <div className="searchBar">
            <input
              type="text"
              placeholder="Enter Dish"
              onChange={handleInput}
            />
            <button onClick={myFun}>Search</button>
          </div>
          <h4 className="msg">{msg}</h4>
        </div>
      </div>

      <div>
        <Mealcards data={data} />
      </div>
    </>
  );
};

export default Homepage;
