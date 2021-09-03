import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning({ meaningData }) {
  //console.log(meaningData);
  return (
    <div className="Meaning">
      <h4>{meaningData.partOfSpeech}</h4>
      {meaningData.definitions.map(function (definition, index) {
        if (definition) {
          return (
            <div key={index} className="row mb-3">
              <p>
                <span className="definition">{definition.definition}</span>
                <br />
                <em>{definition.example}</em>
              </p>
              <Synonyms synonymsData={definition} />
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
