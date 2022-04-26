import React from "react";
import "./style.css";

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="navBarLeft">
        <i className="fa fa-home" aria-hidden="true"></i>
      </div>
      <div className="navBarMiddle">
        <span>Thrill Store</span>
      </div>
      <div className="navBarRight">
        <div className="cartContainer">
          <i
            className="fa fa-shopping-cart shoppingcart"
            aria-hidden="true"
          ></i>
          <div className="cartCount">0</div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
