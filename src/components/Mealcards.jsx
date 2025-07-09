// import React from "react";
// import { NavLink } from "react-router-dom";

// function Mealcards({ data }) {
//   console.log(data);
//   return (
//     <>
//       <div className="meals">
//         {!data
//           ? ""
//           : data.map((curItem) => {
//               return (
//                 <div className="meal" key={curItem.idMeal}>
//                   <img src={curItem.strMealThumb} alt={curItem.strMeal} />
//                   <p>{curItem.strArea}</p>
//                   <NavLink to={`/${curItem.idMeal}`}>
//                     <button>Recipe</button>
//                   </NavLink>
//                 </div>
//               );
//             })}
//       </div>
//     </>
//   );
// }

// export default Mealcards;

import { NavLink } from "react-router-dom";

function Mealcards({ data }) {
  return (
    <>
      <div className="meals">
        {!data
          ? ""
          : data.map((curItem) => {
              return (
                <div className="mealImg" key={curItem.idMeal}>
                  <img src={curItem.strMealThumb} alt={curItem.strMeal} />
                  <p>{curItem.strArea}</p>
                  <NavLink to={`/${curItem.idMeal}`}>
                    <button>Recipe</button>
                  </NavLink>
                </div>
              );
            })}
      </div>
    </>
  );
}

export default Mealcards;
