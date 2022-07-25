import React, {useState} from "react";

function Search({ onSearch }) {
  const [search, setSearch] = useState("");

  onSearch(search)

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input 
          onChange={(e) => setSearch(e.target.value)} 
          className="prompt" 
          />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
