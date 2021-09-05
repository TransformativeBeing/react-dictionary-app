import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning({ meaningData }) {
  return (
    <div className="Meaning">
      <section>
        <h4 className="searched-word">{meaningData.partOfSpeech}</h4>
        {meaningData.definitions.map(function (definition, index) {
          if (definition) {
            return (
              <div key={index} className="row mb-3">
                <div className="definition">{definition.definition}</div>
                <br />
                <em className="examples">{definition.example}</em>
                <Synonyms synonymsData={definition} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </section>
    </div>
  );
}
