import React from "react";
import { Link } from "gatsby";

export default function Info({ imgSrc }) {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center">our story</h2>
        <div className="row my-5">
          <div className="col-md-6">
            <img src={imgSrc.src} />
          </div>
          <div className="col-md-6 text-center my-auto">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel amet
              labore tempore delectus voluptate inventore? Iste tempore
              molestias eaque rem quis blanditiis, facilis excepturi, magnam,
              itaque earum sed fuga quia? At autem corporis ipsam libero
              laboriosam! Unde autem nesciunt beatae, facere illum rerum
              corporis nihil, sint, commodi in debitis quia.
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
