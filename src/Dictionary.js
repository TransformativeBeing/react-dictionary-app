import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(" ");

  function search(event) {
    event.preventDefault();

    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeyword(fetch) {
    setKeyword(fetch.target.value);
  }

  function handleResponse(response) {
    console.log(response.data);
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
