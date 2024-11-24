import React from "react";
import styles from "./SearchBox.module.css";

const SearchBox = ({ handleSearch }) => {
  return (
    <div>
      <label htmlFor="search">Find contacts by name</label>
      <input className={styles.input}
        type="text"
        id="search"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
