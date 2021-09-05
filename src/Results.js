import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Results.css";

export default function Results({ resultsData }) {
  //console.log(resultsData);
  if (resultsData) {
    return (
      <div className="Results">
        <h3 className="word mt-1">{resultsData.word}</h3>
        {resultsData.phonetics.map(function (phonetics, index) {
          return (
            <div key={index}>
              <Phonetics phoneticsData={phonetics} />
            </div>
          );
        })}
        {resultsData.meanings.map(function (meaning, index) {
          return (
            <div key={index} className="word-meaning mt-3">
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
