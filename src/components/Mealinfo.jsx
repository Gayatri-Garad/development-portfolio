import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Mealinfo = () => {
  const { mealid } = useParams();
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const getInfo = async () => {
      const get = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
      );
      const jsonData = await get.json();
      setInfo(jsonData.meals[0]);
    };

    getInfo();
  }, [mealid]);

  return (
    <div>
      {!info ? (
        <h2 style={{ textAlign: "center", marginTop: "20px" }}>
          Loading Recipe...
        </h2>
      ) : (
        <div className="mealInfo">
          <img src={info.strMealThumb} alt={info.strMeal} />
          <div className="info">
            <h1>Recipe Detail</h1>
            <button>{info.strMeal}</button>
            <h3>Instructions</h3>
            <p>{info.strInstructions}</p>

            {info.strYoutube && (
              <button className="ytbtn">
                <a href={info.strYoutube} target="_blank" rel="noreferrer">
                  Watch Video
                </a>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Mealinfo;
