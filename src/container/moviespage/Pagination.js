import ReactPaginate from "react-paginate";
import "./index.styles.css";
import { useState } from "react";
const PaginatedItems = ({ data }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 21;

  const endOffset = itemOffset + itemsPerPage;

  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div>
      <div className="movies-container">
        <div className="moviesdiv-title">
          <p>Popular Movies</p>
        </div>
        <div className="movies-tiles">
          {currentItems.map((value, index) => {
            return (
              <div key={index} className="Movies-div">
                <img
                  src={value.images["Poster Art"].url}
                  alt={value.title}
                  width={150}
                />
                {value.title}
              </div>
            );
          })}
        </div>
      </div>
      <div className="Pagination-div">
        <ReactPaginate
          breakLabel="..."
          nextLabel=" >>>"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<<<"
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
};
export default PaginatedItems;
