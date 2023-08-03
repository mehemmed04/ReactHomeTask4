import React, { useState } from "react";
import "./OperationProductCC.css";
import { products } from "./data";
import ProductComponent from "./ProductComponent";

export default function OperationProductComponent() {
  const [prods, setProducts] = useState(products);

  const [productName, setProductName] = useState("");
  const [productIndex, setproductIndex] = useState("");

  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productImage, setProductImageLink] = useState("");

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedProductId, setSelectedProductId] = useState(null);

  function ClickForUpdateFunc(p) {
    setSelectedProduct(p);
    setSelectedProductId(p.productIndex);
  }

  function handleUpdateSubmitFunc(e) {
    e.preventDefault();

    // Update existing product
    const updatedProduct = {
      productName: selectedProduct?.productName,
      productPrice: selectedProduct?.productPrice,
      productDescription: selectedProduct?.productDescription,
      productImage: selectedProduct?.productImage,
    };

    // Find the index of the selected product in the array
    const selectedIndex = prods.findIndex((product) => product.productIndex === selectedProductId);

    // Create a new array with the updated product
    const updatedProducts = [
      ...prods.slice(0, selectedIndex),
      updatedProduct,
      ...prods.slice(selectedIndex + 1),
    ];

    // Update the state with the new array of products
    setProducts(updatedProducts);

    // Clear the selected product after updating
    setSelectedProductId(null);
    setSelectedProduct(null);

    alert("Product Updated Successfully");
  }

  function handleSubmitFunc(e) {
    e.preventDefault();
    const newAddedProduct = {
      productIndex:prods.length+1,
      productName: productName,
      productPrice: productPrice,
      productDescription: productDescription,
      productImage: productImage,
    };
    setProducts([...prods, newAddedProduct]); // Add Product
    // Elave edenden sonra inputlari temizlesin
    setProductName("");
    setProductPrice("");
    setProductDescription("");
    setProductImageLink("");
    alert("Product Added Successfully");
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmitFunc}>
        <br></br>
        <div className="form-group">
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            id="name"
            name="name"
            placeholder="Product Name"
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            id="price"
            name="price"
            placeholder="Product Price"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            value={productImage}
            onChange={(e) => setProductImageLink(e.target.value)}
            id="imageLink"
            name="imageLink"
            placeholder="Image Link"
          />
        </div>
        <div className="form-group">
          <textarea
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            name="description"
            placeholder="Product Description"
          />
        </div>
        <button type="submit">
          <b>Add Product</b>
        </button>
        <br></br>
        <br></br>
        {/* <button style={{ background: "#007fcc" }}>
          <b>Update Product</b>
        </button> */}
      </form>

      <form onSubmit={handleUpdateSubmitFunc}>
        <br></br>
        <div className="form-group">
          <input
            type="text"
            value={selectedProduct?.productName || ""}
            onChange={(e) =>
              setSelectedProduct({
                ...selectedProduct,
                productName: e.target.value,
              })
            }
            id="name"
            name="name"
            placeholder="Product Name"
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            id="price"
            name="price"
            value={selectedProduct?.productPrice || ""}
            onChange={(e) =>
              setSelectedProduct({
                ...selectedProduct,
                productPrice: e.target.value,
              })
            }
            placeholder="Product Price"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="imageLink"
            value={selectedProduct?.productImage || ""}
            onChange={(e) =>
              setSelectedProduct({
                ...selectedProduct,
                productImage: e.target.value,
              })
            }
            name="imageLink"
            placeholder="Image Link"
          />
        </div>
        <div className="form-group">
          <textarea
            name="description"
            placeholder="Product Description"
            value={selectedProduct?.productDescription || ""}
            onChange={(e) =>
              setSelectedProduct({
                ...selectedProduct,
                productDescription: e.target.value,
              })
            }
          />
        </div>
        <button type="submit" style={{ background: "#007fcc" }}>
          <b>Update Product</b>
        </button>
        <br></br>
        <br></br>
      </form>

      <br></br>
      <br></br>
      {/* <ProductComponent prs={prods}></ProductComponent> */}
      <div>
        <h2>Product List</h2>
        <div></div>
        {prods.map((product) => (
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
                  onClick={() => ClickForUpdateFunc(product)}
                >
                  Click For Update
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
