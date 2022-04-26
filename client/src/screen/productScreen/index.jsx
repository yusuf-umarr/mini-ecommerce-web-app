import React, { useState } from "react";
import "./style.css";
import watch4 from "../../assets/images/watch4.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProductScreen = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [product, setProduct] = useState("");
  const navigate = useNavigate();

  const handleProduct = (e) => {
    setProduct(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/api/auth/product", {
        name,
        address,
        phone,
        product,
      });
      alert(
        "Thanks for your patronage, one of our agents will contact you soon"
      );
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="productScreen">
      <div className="productScreenLeft">
        <div className="productImgContainer">
          <img src={watch4} alt="" className="productImg" />
        </div>
      </div>
      <div className="productScreenRight">
        <div className="productScreenRightText">
          <h1>Men Watch</h1>
          <div className="priceContainer">
            <h2>₦21,000</h2>
            <div className="priceRight">
              <del> ₦30,000</del>
            </div>
            <span>for 1 product</span>
          </div>
          <div className="priceContainer">
            <h2>₦35,000</h2>
            <div className="priceRight">
              <del> ₦60,000</del>
            </div>
            <span>for 2 products</span>
          </div>
          <span>
            {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
            vitae maxime suscipit. Blanditiis obcaecati necessitatibus placeat
            laborum. Eveniet rem facilis nam dolorum blanditiis vitae itaque
            officiis, optio quisquam quam enim. */}
          </span>
        </div>
        <span className="textTitle">
          Please enter your correct details in the form bellow
        </span>
        <form className="productForm" onSubmit={handleSubmit}>
          <div className="formDiv">
            <span className="userEmail">Name</span>
            <div className="inputContainer">
              <input
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
                placeholder="your name"
              />
            </div>
          </div>
          <div className="formDiv">
            <span className="userEmail">Phone</span>
            <div className="inputContainer">
              <input
                value={phone}
                type="number"
                required
                onChange={(e) => setPhone(e.target.value)}
                placeholder="07012345678"
              />
            </div>
          </div>
          <div className="formDiv">
            <span className="userEmail">Address</span>
            <div className="inputContainer">
              <input
                value={address}
                required
                onChange={(e) => setAddress(e.target.value)}
                placeholder="your address"
              />
            </div>
          </div>
          <div className="formDiv">
            <span className="userEmail">Select Product</span>

            <select
              value={product}
              onChange={handleProduct}
              className="selectContainer"
            >
              <option value="1 product for ₦21,000">
                1 product for ₦21,000
              </option>
              <option value="2 products for ₦35,000">
                2 products for ₦35,000
              </option>
            </select>
          </div>
          <button className="submitBtn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ProductScreen;
