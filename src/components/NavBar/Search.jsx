import { FaSearch } from "react-icons/fa";

function Search() {
  return (
    <div className="search-container">
      <input type="text" placeholder="Search..." className="search-item" />
      <FaSearch className="search-icon" />
    </div>
  );
}

export default Search;
