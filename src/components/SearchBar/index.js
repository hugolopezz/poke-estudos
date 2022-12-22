import React  from "react";
import "./styles.css";

const SearchBar = ({ searchTerm, setSearchTerm }) => {

  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search Pokemon"
          value={searchTerm}
          onChange={(e) => (setSearchTerm(e.target.value))}
          autoFocus
        />
      </form>
    </section>
  );
};

export default SearchBar;
