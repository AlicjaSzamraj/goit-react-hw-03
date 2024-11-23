import React from "react";
import "./SearchBox.module.css";

const SearchBox = ({ handleSearch }) => {
  return (
    <div>
      <label htmlFor="search">Find contacts by name</label>
      <input
        type="text"
        id="search"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
