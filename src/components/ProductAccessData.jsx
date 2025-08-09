// import React from "react";

// const ProductAccessData = ({ productaccess }) => {
//   console.log("product", productaccess);
//   return (
//     <>
//       <div className="row conatainer ">
//         {productaccess.map((el, index) => (
//           <div
//             className="card col-3 card ms-4 mb-3 mx-auto"
//             style={{ width: "18rem" }}
//             key={index}
//           >
//             <img
//               src={el.images}
//               className="card-img-top"
//               alt={`${el.title} Image`}
//             />
//             <div className="card-body">
//               <h5 className="card-title">
//                 <strong>Title : </strong> {el.title}
//               </h5>
//               <p className="card-text">
//                 <strong>Category : </strong> {el.category}
//               </p>
//               <p className="card-text">
//                 <strong>Category Type : </strong> {el.tags}
//               </p>

//               <p className="card-text">
//                 <strong>Price: </strong> {el.price}
//               </p>
//               <p className="card-text">
//                 <strong>Description: </strong> {el.description}
//               </p>
//               <p className="card-text">
//                 <strong>Discount Percentage:</strong> {el.discountPercentage}%
//               </p>
//               <p className="card-text">
//                 <strong>Stock:</strong> {el.stock}
//               </p>
//               <button
//                 className="btn btn-primary"
//                 onClick={() => alert("Clicked!")}
//               >
//                 Clicked
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default ProductAccessData;

import React from "react";

const ProductAccessData = ({ productaccess }) => {
  return (
    <>
      <div className="row container">
        {productaccess.map((el, index) => (
          <div className="card col-3 ms-4 mb-3 mx-auto" key={index}>
            <img
              src={el.images[0]}
              className="card-img-top"
              alt={`${el.title} Image`}
            />
            <div className="card-body">
              <h5 className="card-title">
                <strong>Title: </strong> {el.title}
              </h5>
              <p className="card-text">
                <strong>Category: </strong> {el.category}
              </p>
              <p className="card-text">
                <strong>Tags: </strong> {el.tags.join(", ")}
              </p>
              <p className="card-text">
                <strong>Price: </strong> ${el.price}
              </p>
              <p className="card-text">
                <strong>Description: </strong> {el.description}
              </p>
              <p className="card-text">
                <strong>Discount: </strong> {el.discountPercentage}%
              </p>
              <p className="card-text">
                <strong>Stock: </strong> {el.stock}
              </p>
              <button
                className="btn btn-primary"
                onClick={() => alert("Clicked!")}
              >
                Clicked
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductAccessData;
