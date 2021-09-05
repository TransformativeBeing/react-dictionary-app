import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetics({ phoneticsData }) {
  //console.log(phoneticsData.audio);

  return (
    <div className="Phonetics">
      <ReactAudioPlayer
        src={phoneticsData.audio}
        autoPlay={false}
        controls={true}
        children="null"
      />
      <span className="phonetic me-4">{phoneticsData.text}</span>
    </div>
  );
}
