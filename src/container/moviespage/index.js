import React, { useEffect, useState } from "react";
import sample from "../../feed/sample.json";
import "./index.styles.css";
import PaginatedItems from "./Pagination";
const Movies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [allMovies, setAllMovies] = useState(sample.entries);
  const handleLoading = () => {
    setIsLoading(false);
  };
  setTimeout(handleLoading, 3000);
  useEffect(() => {
    filterItems();
  }, []);

  const filterItems = () =>
    setAllMovies((items) =>
      items
        .filter((year) => year.programType.includes("movies"))
        .sort((a, b) => a.title.localeCompare(b.title))
    );
  return (
    <div className="Movies-wrapper">
      {isLoading ? (
        <div className="Loading-div">Loading...</div>
      ) : (
        <PaginatedItems data={allMovies} />
      )}
    </div>
  );
};
export default Movies;
