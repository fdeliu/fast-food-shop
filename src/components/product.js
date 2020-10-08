import React, { useState } from "react";

const Product = ({ product }) => {
  const [showDescription, setShowDescription] = useState(false);
  return (
    <div className="product col-12 col-sm-6 col-md-3 mb-4">
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

          <p className="mt-2">
            {product.descrption.content[0].content[0].value}
          </p>
          <button
            className="btn btn-yellow btn-block text-capitalize add-to-cart snipcart-add-item"
            data-item-id={product.id}
            data-item-name={product.name}
            data-item-price={product.price}
            data-item-image={product.image.fixed.src}
            data-item-url="https://fast-food-shop.netlify.com/"
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
