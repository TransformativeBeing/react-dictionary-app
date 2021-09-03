import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(" ");

  function search(yo) {
    yo.preventDefault();
    alert(`Searching for ${keyword}...`);
  }
  function handleKeyword(show) {
    setKeyword(show.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search} className="form row">
        <div className="search-bar col-11">
          <input
            type="search"
            onChange={handleKeyword}
            placeholder="Search word"
            className="form-control"
          />
        </div>
      </form>
    </div>
  );
}
