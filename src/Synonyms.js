import React from "react";

export default function Synonyms({ synonymsData }) {
  return (
    <div className="Synonyms row">
      {synonymsData.synonyms.map(function (synonyms, index) {
        if (synonyms) {
          return (
            <div key={index} className="col-auto">
              <div>{synonyms}</div>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
