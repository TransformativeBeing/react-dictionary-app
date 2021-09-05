import React from "react";
import ReactAudioPlayer from "react-audio-player";
// npm React Audio Player documentation: https://www.npmjs.com/package/react-audio-player

export default function Phonetics({ phoneticsData }) {
  return (
    <div className="Phonetics">
      <span className="phonetic me-4">{phoneticsData.text}</span>
      <ReactAudioPlayer
        src={phoneticsData.audio}
        autoPlay={false}
        controls={true}
        children={true}
      />
    </div>
  );
}
