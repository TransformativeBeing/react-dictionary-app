import React from "react";

export default function Meaning({ meaningData }) {
  console.log(meaningData);
  return (
    <div className="Meaning">
      <h4>{meaningData.partOfSpeech}</h4>
      {meaningData.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              {definition.definition}
              <br />
              <em>{definition.example}</em>
            </p>
          </div>
        );
      })}
    </div>
  );
}
