import React from "react";

export default function Photos({ photosData, alt }) {
  if (photosData) {
    return (
      <div className="Photos">
        <div className="row">
          {photosData.map(function (photo, index) {
            return (
              <div
                className="col-md-2 col-4 d-flex align-items-center mb-4"
                key={index}
              >
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.medium}
                    alt={alt}
                    className="images img-fluid rounded-3"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
