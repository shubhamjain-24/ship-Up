import React from "react";
import "./Footer.css"; // Import your CSS file
import lg1 from '../../Images/s1.png'
import lg2 from '../../Images/s2.png'
import lg3 from '../../Images/s3.png'
import lg4 from '../../Images/s4.png'

const Footer = () => {
  return (
    <>
      {/* Main Container for Footer Section */}
      <div className="footer_mainContainer">
        {/* Flex Container for Footer Content */}
        <div className="footer_flexContainer">
          {/* Footer Division 1 */}
          <div className="footer_div1">
            <div className="fd1_text1">
              Ship<span className="fd1_text1_color">Up</span>
            </div>
            <div className="fd1_text2">
              ShipUp delivers an unparalleled customer service through dedicated
              customer teams, engaged people working in an agile culture, and a
              global footprint
            </div>
          </div>

          {/* Footer Division 2 */}
          <div className="footer_div2">
            <div className="fd2_text1">Explore</div>
            <div className="fd2_list">
              <div className="fd2_text2">About Us</div>
              <div className="fd2_text2">Our warehouses</div>
              <div className="fd2_text2">Blog</div>
              <div className="fd2_text2">News and Media</div>
            </div>
          </div>

          {/* Footer Division 3 */}
          <div className="footer_div3">
            <div className="fd2_text1">Legal</div>
            <div className="fd2_list">
              <div className="fd2_text2">Terms</div>
              <div className="fd2_text2">Privacy</div>
            </div>
          </div>

          {/* Footer Division 4 */}
          <div className="footer_div4">
            <div className="fd2_text1">Social Media</div>
            <div className="fd4_iconsDiv">
              {/* Social Media Icons */}
              <div className="fd4_icon">
                <img src={lg1} alt="" />
              </div>
              <div className="fd4_icon">
                <img src={lg2} alt="" />
              </div>
              <div className="fd4_icon">
                <img src={lg3} alt="" />
              </div>
              <div className="fd4_icon">
                <img src={lg4} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Line Separator */}
        <div className="line"></div>

        {/* Additional Text in Footer Section */}
        <div className="fd_text">
          Ship<span className="fd_text_color">Up</span>
          <span className="fd_text_color2">.ng</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
