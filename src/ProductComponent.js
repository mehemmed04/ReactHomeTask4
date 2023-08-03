import React, { useState } from "react";


const ProductComponent = (props) => {
  return (
    <div>
        <h2>Product List</h2>
        <div></div>
        {props.prs.map((product) => (
          <div style={{ display: "inline-block", margin: "50px" }}>
            <div id="maincard" className="card">
              <img
                src={product.productImage}
                alt="Nike-Shoe"
                className="sneaaker-img"
              />
              <h1 className="title sizes-box">
                <section
                  style={{
                    margin: "15px",
                    marginTop: "-5px",
                    display: "inline-block",
                  }}
                >
                  <b style={{ fontSize: "33px" }}>{product.productName}</b>
                  <br></br>
                </section>
              </h1>
              <p
                style={{
                  marginTop: "-30px",
                  marginBottom: "20px",
                  textAlign: "left",
                }}
              >
                {product.productDescription}
              </p>
              <div className="button-box">
                <button
                  style={{ marginBottom: "10px", background: "orangered" }}
                  className="purchase"
                >
                  Buy For {product.productPrice}$ Now
                </button>
                <br></br>
                <button
                  style={{ marginBottom: "-10px", background: "#007fcc" }}
                  className="purchase"
                >
                  Click For Update
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
  );
};

export default ProductComponent;