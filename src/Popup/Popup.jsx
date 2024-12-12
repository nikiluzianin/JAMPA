import React, { useEffect, useState } from 'react';
import './Popup.css'; // Import the custom styles
//import { previousTrackPlayer, togglePlayer, nextTrackPlayer, getCurrentTrack } from '../Player/Player';



export const updatePlayerInfo = (currentTrack, playerVolume) => {
  if (currentTrack) {
    document.getElementById("songname").textContent = currentTrack.name;
    document.getElementById("artistname").textContent = currentTrack.artists[0].name;
    document.getElementById("songpic").src = currentTrack.album.images[0].url;

    //console.log(currentTrack.album.images[0].url);
  }
  document.getElementById("volumeRange").value = playerVolume;
}


export const Popup = ({ togglePlayer, nextTrackPlayer, previousTrackPlayer, setPlayerVolume, isPaused }) => {

  const changeVolume = (e) => {
    setPlayerVolume(document.getElementById("volumeRange").value);
  }

  return (
    <div className="popup-container">
      {/* Song Info */}
      <div className="song-info">
        <img id="songpic" src="src/Popup/white-question-mark.svg" alt="Album Art" />
        <div>
          <p id="songname">Nothing</p>
          <p id="artistname">Nothing</p>
        </div>
      </div>

      {/* Playback Controls */}
      <div className="playback-container">
        <div className="playback-buttons d-flex justify-content-center gap-3 mb-2">
          <button onClick={previousTrackPlayer}> <img src="src/Popup/prev.png" alt="Previous" /></button>
          <button onClick={togglePlayer}> {isPaused ? <img src="src/Popup/play.png" alt="Play" /> : <img src="src/Popup/pause.png" alt="Play" />} </button>
          <button onClick={nextTrackPlayer}><img src="src/Popup/next.png" alt="Next" /></button>
        </div>
        <div className="d-flex align-items-center gap-3">
          <p className="mb-0">1:04</p>
          <div className="progress-bar-container progress">
            <div className="progress-bar" role="progressbar"></div>
          </div>
          <p className="mb-0">4:10</p>
        </div>
      </div>

      {/* Volume Controls */}
      <div className="volume-container">
        <img src="src/Popup/volume.png" alt="Volume" />
        <input type="range" min="0" max="100" className="form-range" id="volumeRange" onChange={changeVolume}></input>


      </div>
    </div>
  );
};

// export Popup;
