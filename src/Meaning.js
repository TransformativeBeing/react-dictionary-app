import React from "react";

export default function Meaning({ meaningData }) {
  //console.log(meaningData);
  return (
    <div className="Meaning">
      <h4>{meaningData.partOfSpeech}</h4>
      {meaningData.definitions.map(function (definition, index) {
        return (
          <div key={index} className="row mb-3">
            <p>
              {definition.definition}
              <br />
              <em>{definition.example}</em>
            </p>
            {definition.synonyms.map(function (synonyms, index) {
              return (
                <div key={index} className="col-auto">
                  <div>{synonyms}</div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
