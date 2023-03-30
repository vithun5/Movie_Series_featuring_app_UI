import React, { useState } from "react";
import "./index.styles.css";
import hamburgerIcon from "../../assets/hamburger.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    isOpen === true ? setIsOpen(false) : setIsOpen(true);
  };
  return (
    <div className="Navbar-Container">
      <div className="navbar-details">
        <div className="title-div">
          <Link to="/">
            <p>DEMO Streaming</p>
          </Link>
        </div>
        <div className="otherItems-div">
          <p>Log in</p>
          <button>Start your free trial</button>
        </div>
        <div className="Hamburger-Icon">
          <img src={hamburgerIcon} alt="hamburger" onClick={handleClick} />
          {isOpen && (
            <div className="list-element">
              <p>Log in</p>
              <hr />

              <button>Start your free trial</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
