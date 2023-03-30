import React, { useState } from "react";
import { Link } from "react-router-dom";
import placeholder from "../../assets/placeholder.png";
import "./index.styles.css";
const Homepage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const handleLoading = () => {
    setIsLoading(false);
  };
  setTimeout(handleLoading, 2000);

  return (
    <div className="container">
      <div className="header-div">Popular Titles</div>
      {isLoading ? (
        <div className="Loading-div">Loading...</div>
      ) : (
        <div className="tiles-div">
          <div className="tiles-heading">
            <Link to="/Series">
              <div className="series-div">
                <img
                  src={placeholder}
                  alt="series"
                  className="placeholder-image"
                />
                <p>SERIES</p>
              </div>
            </Link>

            <p>Popular Series</p>
          </div>

          <div className="tiles-heading">
            <Link to="/Movies">
              <div className="movies-div">
                <img
                  src={placeholder}
                  alt="Movies"
                  className="placeholder-image"
                />
                <p>MOVIES</p>
              </div>
            </Link>

            <p>Popular Movies</p>
          </div>
        </div>
      )}
    </div>
  );
};
export default Homepage;
