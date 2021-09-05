import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Loading from "./Loading";
import "./Dictionary.css";

export default function Dictionary({ defaultKeyword }) {
  //console.log(defaultKeyword);
  const [keyword, setKeyword] = useState(defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  function search() {
    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    const pexelsApiKey =
      "563492ad6f91700001000001d17fcfe2befd47d98f9313e611360597";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let header = { Authorization: `Bearer ${pexelsApiKey}` };
    axios
      .get(pexelsApiUrl, {
        headers: header,
      })
      .then(handlePexelsResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleKeyword(fetch) {
    setKeyword(fetch.target.value);
  }
  function handleDictionaryResponse(response) {
    //console.log(response.data);
    setResults(response.data[0]);
  }
  function handlePexelsResponse(response) {
    //console.log(response.data);
    setPhotos(response.data.photos);
  }
  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h4 className="text-center">
            What words are you curious to discover?
          </h4>
          <form onSubmit={handleSubmit} className="form row">
            <div className="search-bar col-12">
              <input
                type="search"
                onChange={handleKeyword}
                placeholder="Search a word"
                className="form-control"
              />
            </div>
          </form>
          <div className="hints ms-1">
            hints: brave, yoga, plant, supercalifragilisticexpialidocious...
          </div>
        </section>
        <Results resultsData={results} photosData={photos} alt={keyword} />
      </div>
    );
  } else {
    load();
    return (
      <div className="loading">
        <Loading size="500" color="rgba(211, 211, 211, 0.6)" />
      </div>
    );
  }
}
