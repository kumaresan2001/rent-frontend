import axios from "axios";
import React, { useContext, useState } from "react";
import { Config } from "./Config";
import { UserContext } from "./Context";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import CropSquareIcon from "@mui/icons-material/CropSquare";
function ProductCard({ item }) {
  const cart = useContext(UserContext);
  const CartItem = cart.CartItems;
  const setcart = cart.setCartItems;
  const Add = async (_id) => {
    let product = await axios.get(`${Config.api}/Product/${_id}`);
    console.log(product.data);
    let addproduct = product.data;
    CartItem.push(addproduct);
    setcart([...CartItem]);
  };
  return (
    // <div className="app">
    <div className="col-lg-4 mt-4">
      <div className="card card-prod" style={{ width: "18em" }}>
        <img
          className="card-img"
          src={item.image}
          alt="Product image"
          width={"80px"}
          height="200px"
        />
        <div className="card-body">
          <p
            className="card-text"
            style={{ fontSize: 18, color: "#D53F8C", fontWeight: "extrabold" }}
          >
            Rs.
            {item.price}
            <span style={{ fontSize: 12, color: "grey", fontWeight: "normal" }}>
              /month
            </span>
          </p>
          <h5
            className="card-title"
            style={{ fontSize: 24, letterSpacing: "tight" }}
          >
            {item.name}
          </h5>
          <p style={{ fontSize: "6", color: "grey" }}>{item.address}</p>
          <div class="d-flex justify-content-around">
            <BedIcon style={{ color: "#D53F8C" }}></BedIcon>
            <span style={{ fontSize: 12 }}>{item.bedrooms}</span>
            <BathtubIcon style={{ color: "#D53F8C" }}></BathtubIcon>{" "}
            <span style={{ fontSize: 12 }}>{item.bathrooms}</span>
            <CropSquareIcon style={{ color: "#D53F8C" }}></CropSquareIcon>
            <span style={{ fontSize: 12 }}>{item.surface}</span>
          </div>
          {/* <button
            className="btn btn-primary"
            disabled={CartItem.some((obj) => obj._id == item._id)}
            onClick={() => {
              Add(item._id);
            }}
          >
            {CartItem.some((obj) => obj._id == item._id)
              ? "Added to card"
              : "add to cart"}
          </button> */}
        </div>
      </div>
    </div>
    // </div>
  );
}

export default ProductCard;
