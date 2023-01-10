import React, { useState } from "react";

const Pagination = ({page, setPage}) => {

  return (
    <div className="pagination">
      <button className="pagination-button" disabled={page <= 1} onClick={() => setPage(page - 1)}>Prev</button>
      <span className="page-text">Page: {page}</span>
      <button className="pagination-button" onClick={() => setPage(page + 1)}>Next</button>
    </div>
  )
}

export default Pagination;
