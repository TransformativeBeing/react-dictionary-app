import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import Photos from "./Photos";
import "./Results.css";

export default function Results({ resultsData, photosData, alt }) {
  if (resultsData) {
    return (
      <div className="Results">
        <section>
          <h2 className="word text-start">{resultsData.word}</h2>
          {resultsData.phonetics.map(function (phonetics, index) {
            return (
              <div key={index}>
                <Phonetics phoneticsData={phonetics} />
              </div>
            );
          })}
        </section>
        <section>
          <Photos photosData={photosData} alt={alt} />
        </section>
        {resultsData.meanings.map(function (meaning, index) {
          return (
            <div key={index} className="word-meaning">
              <Meaning meaningData={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
