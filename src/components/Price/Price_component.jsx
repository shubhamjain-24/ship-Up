import React from "react";
import "./Price_component.css";
import { HiLocationMarker } from "react-icons/hi";
import { FaBagShopping } from "react-icons/fa6";

const Price_component = () => {
  return (
    <>
      <div className="price_mainContainer">
        <div className="price_subContainer">
          <div className="input-field">
            <HiLocationMarker className="location-icon" />
            <input type="text" placeholder="Enter location" />
          </div>
          {/* input 2 */}
          <div className="input-field2">
            <HiLocationMarker className="location-icon" />
            <input type="text" placeholder="Enter location" />
          </div>
          {/* input 3 */}
          <div className="input-field3">
            <FaBagShopping style={{color:"#979797"}} className="location-icon" />
            <input type="text" placeholder="Weight (KG)" />
          </div>

          <div className="input-button">Check Price</div>
        </div>
      </div>
    </>
  );
};

export default Price_component;
