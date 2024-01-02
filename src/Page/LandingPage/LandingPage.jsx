import React, { useState } from "react";
import "./LandingPage.css";
import img1 from "../../Images/icon.png";
import img2 from "../../Images/bg.png";
import YouTubeModal from "../../components/Modal/youtubeModal"; 
import lg1 from '../../Images/truck.png'
import lg2 from '../../Images/plane.png'

const LandingPage = () => {
  // State to manage the visibility of the YouTube modal
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      {/* Main container for the Landing Page */}
      <div className="LP_mainContainer">
        {/* Main division within the Landing Page */}
        <div className="LP_mainDiv">
          {/* Sub-division 1 with text content and buttons */}
          <div className="LP_subdiv1">
            {/* Circular background div */}
            <div className="circle_div"></div>
            {/* Vehicle div with truck icon */}
            <div className="vehicle_div">
              <img src={lg1} alt="" />
            </div>
            {/* Vehicle div with plane icon */}
            <div className="plane_div">
              <img src={lg2} alt="" />
            </div>
            {/* Heading text */}
            <div className="LP_text1">
              Quick & Reliable{" "}
              <span className="LP_text1_color">
                {" "}
                Warehousing and Logistics{" "}
              </span>{" "}
              Solution.
            </div>
            {/* Subheading text */}
            <div className="LP_text2">
              ShipUp Delivers an unparalleled customer service through dedicated
              customer teams, engaged people working in an agile culture, and a
              global footprint
            </div>
            {/* Buttons section */}
            <div className="LP_buttonsDiv">
              {/* Primary Join Now button */}
              <div className="LP_button1">Join Now</div>
              {/* Secondary button with icon */}
              <div className="LP_button2">
                <img src={img1} alt="" />
              </div>
              {/* Text button to play demo */}
              <div
                style={{cursor:"pointer"}}
                className="LP_buttonText"
                onClick={() => setModalShow(true)}
              >
                Play Demo
              </div>
              {/* YouTube modal triggered by the Play Demo button */}
              <YouTubeModal show={modalShow} onHide={() => setModalShow(false)} />
            </div>
          </div>
          {/* Sub-division 2 with the background image */}
          <div className="LP_subdiv2">
            <img className="LP_img" src={img2} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
