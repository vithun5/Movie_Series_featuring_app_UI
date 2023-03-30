import React, { useEffect, useState } from "react";
import sample from "../../feed/sample.json";
import "./index.styles.css";
import PaginatedItems from "./Pagination";
const Series = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [allSeries, setAllSeries] = useState(sample.entries);
  const handleLoading = () => {
    setIsLoading(false);
  };
  setTimeout(handleLoading, 3000);

  useEffect(() => {
    filterItems();
  }, []);

  const filterItems = () =>
    setAllSeries((items) =>
      items
        .filter((year) => year.programType.includes("series"))
        .sort((a, b) => a.title.localeCompare(b.title))
    );

  return (
    <div className="series-wrapper">
      {isLoading ? (
        <div className="Loading-div">Loading...</div>
      ) : (
        <PaginatedItems data={allSeries} />
      )}
    </div>
  );
};
export default Series;
