import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results({ data }) {
  console.log(data);
  if (data) {
    return (
      <div className="Results">
        <h3 className="word mt-1">{data.word}</h3>
        {data.meanings.map(function (meaning, index) {
          return (
            <div className="word-meaning my-1" key={index}>
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
