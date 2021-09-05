import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetics({ phoneticsData }) {
  //console.log(phoneticsData.audio);

  return (
    <div className="Phonetics">
      <span className="phonetic me-4">{phoneticsData.text}</span>
      <ReactAudioPlayer
        src={phoneticsData.audio}
        autoPlay={false}
        controls={true}
        children="null"
      />
    </div>
  );
}
