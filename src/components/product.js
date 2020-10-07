import React, { useState } from "react";

const Product = ({ product }) => {
  const [showDescription, setShowDescription] = useState(false);
  return (
    <div className="col-12 col-sm-6 col-md-4 mb-4">
      <div className="card" style={{ minHeight: "100%" }}>
        <img
          src={product.image.fixed.src}
          alt={product.image.title}
          className="card-img-top"
        />
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <h6 style={{ fontWeight: "bold", width: "90%" }}>{product.name}</h6>
            <p style={{ color: "#ff9e09" }}>{product.price} $</p>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <p onClick={() => setShowDescription(!showDescription)}>
              Description{" "}
              {showDescription ? <span>&#9650;</span> : <span>&#9660;</span>}
            </p>
            <button className="btn btn-yellow mt-auto text-capitalize">
              add to cart
            </button>
          </div>
          {showDescription && (
            <p className="mt-2">
              {product.descrption.content[0].content[0].value}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
