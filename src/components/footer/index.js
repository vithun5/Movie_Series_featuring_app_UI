import React from "react";
import "./index.styles.css";
import facebook from "../../assets/social/facebook-white.svg";
import twitter from "../../assets/social/twitter-white.svg";
import instagram from "../../assets/social/instagram-white.svg";
import appStore from "../../assets/store/app-store.svg";
import playStore from "../../assets/store/play-store.svg";
import windowsStore from "../../assets/store/windows-store.svg";
const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-container">
        <div className="first-column">
          <div className="policies-div">
            <p>
              Home | Terms and Conditions | Privacy Policy | Collection
              Statement | Help | Manage Account
            </p>
          </div>
          <div className="copyright-div">
            Copyright &copy; 2016 DEMO Streaming. All Rights Reserved.
          </div>
        </div>
        <div className="second-column">
          <div className="social-media">
            <img src={facebook} alt="facebook" width={40} height={30} />
            <img src={twitter} alt="twitter" width={40} height={27} />
            <img src={instagram} alt="instagram" width={30} height={27} />
          </div>
          <div className="playStore-div">
            <img src={appStore} alt="appstore" width={100} height={30} />
            <img src={playStore} alt="playstore" width={100} height={30} />
            <img src={windowsStore} alt="windowstore" width={100} height={30} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
