import React, { useEffect } from "react";
import "./style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import guarantee from "../../assets/images/guarantee.jpg";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Link to="product-screen" className="homeScreen">
      <div className="homeScreenLeft">
        <div className="homeScreenLeftTopA"></div>
        <div
          className="homeScreenLeftTopB"
          data-aos="fade-down"
          data-aos-duration="3000"
        >
          {" "}
          <span>
            NAVIFORCE Digital Stainless Gold Watch Men Waterproof Quartz
            Chronograph LED Backlight Watches
          </span>
          <span>
            Old price: <del> ₦30,000</del>
          </span>
        </div>
        <div
          className="homeScreenLeftTopC"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <span>Get this Luxury watch at 60% discount today</span>
          <div class="homeScreenLeftTopCDiv">
            <span>Get 1 for ₦21,000</span>
            <span>Get 2 for ₦35,000</span>
          </div>
        </div>
        <div
          className="homeScreenLeftTopD"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          {/* <span>.</span> */}
          <button>Buy Now</button>
        </div>
      </div>

      <div className="homeScreenRight">
        <div
          className="homeScreenRightTopA"
          data-aos="zoom-in-up"
          data-aos-duration="3000"
        ></div>
        <div className="homeScreenRightTopB">
          <div
            className="homeScreenRightTopBa"
            data-aos="zoom-in-right"
            data-aos-duration="3000"
          >
            {" "}
            <span>.</span>
            <button>Buy Now</button>
          </div>
          <div
            className="homeScreenRightTopBb"
            data-aos="zoom-in-left"
            data-aos-duration="3000"
          >
            <button>Buy Now</button>
          </div>
        </div>
        <div className="homeScreenRightTopC">
          <div
            className="homeScreenRightTopCa"
            data-aos="zoom-in-left"
            data-aos-duration="3000"
          >
            <button>Buy Now</button>
          </div>
          <div
            className="homeScreenRightTopCb"
            data-aos="zoom-in-right"
            data-aos-duration="3000"
          >
            {" "}
            <div className="homeScreenRightTopCbText">
              <span>100% Waterproof</span>
              <span>Suitable for washing hands and water splashes.</span>
            </div>
            <button>Buy Now</button>
          </div>
        </div>
        <div
          className="homeScreenRightTopD"
          data-aos-duration="3000"
          data-aos="fade-up"
        >
          <h3>100% money back Guarantee</h3>
          <div className="moneyBackContainer">
            <img src={guarantee} alt="" className="moneybackImg" />
          </div>
          <span>
            100% Money Back Guarantee allows you to get a full refund if you are
            not statified with the product
          </span>
        </div>
        <div
          className="homeScreenRightTopD customerR"
          data-aos-duration="3000"
          data-aos="fade-up"
        >
          <h3>Customer Review</h3>
          <CustomerReview
            nameAddress="Daniel, Lekki Lagos"
            comment="Real nice watch & you can’t go wrong with Naviforce"
          />
          <CustomerReview
            nameAddress="Murphy, Abuja"
            comment="It came in a nice box with the brand name, 
            inside was the watch, tools and the manual. It was a gift for my dad, he loves it."
          />
          <CustomerReview
            nameAddress="Adewale, Lagos"
            comment="Beautiful watch, motion is just as advertised! Going to be lit with my green outfit to match"
          />
          <CustomerReview
            nameAddress="Hakeem, Surulere Lagos"
            comment="Definitely worth the money, I will buy again             ."
          />
        </div>
      </div>
    </Link>
  );
};

export default HomeScreen;

const CustomerReview = ({ nameAddress, comment }) => {
  return (
    <div className="customer-review-container">
      <div className="customer-review-top">
        <span>{nameAddress}</span>
        <span>
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
        </span>
      </div>
      <div className="customer-review-bottom">
        <span>{comment}</span>
      </div>
    </div>
  );
};
