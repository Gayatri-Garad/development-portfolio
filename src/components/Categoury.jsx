import React from "react";

function Categoury({ productsType, filter, productItems }) {
  return (
    <>
      <hr />
      <div className="container">
        <nav>
          {productsType.map((el, index) => (
            <a
              key={index}
              href="#"
              className="btn"
              onClick={(e) => {
                e.preventDefault();
                filter(productItems, el);
              }}
            >
              {el.charAt(0).toUpperCase() + el.slice(1)}
            </a>
          ))}
        </nav>
      </div>
      <hr />
    </>
  );
}

export default Categoury;
