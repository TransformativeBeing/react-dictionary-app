import React, { useState } from "react";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(" ");

  function search(yo) {
    yo.preventDefault();
    alert(`Searching for ${keyword}...`);
  }
  function handleKeyword(find) {
    setKeyword(find.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search} className="form row">
        <input
          type="search"
          onChange={handleKeyword}
          placeholder="Search word"
          className="search-bar form-control col-3"
        />
      </form>
    </div>
  );
}
