import React, { useEffect, useState } from 'react';
import './Popup.css'; // Import the custom styles

export const updatePlayerInfo = (currentTrack, playerVolume) => {
  if (currentTrack) {
    document.getElementById("songname").textContent = currentTrack.name;
    document.getElementById("artistname").textContent = currentTrack.artists[0].name;
    document.getElementById("songpic").src = currentTrack.album.images[0].url;
  }
  document.getElementById("volumeRange").value = playerVolume;
};

export const Popup = ({ togglePlayer, nextTrackPlayer, previousTrackPlayer, setPlayerVolume, isPaused }) => {
  const changeVolume = (e) => {
    setPlayerVolume(document.getElementById("volumeRange").value);
  };

  return (
    <div className="popup-container">
      {/* Song Info */}
      <div className="song-info">
        <img id="songpic" src="src/Popup/white-question-mark.svg" alt="Album Art" />
        <div>
          <p id="songname" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Nothing</p>
          <p id="artistname" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Nothing</p>
        </div>
      </div>

      {/* Playback Controls */}
      <div className="playback-container">
        <div className="playback-buttons d-flex justify-content-center gap-4 mb-2">
          <button onClick={previousTrackPlayer} className="btn btn-light" style={{ backgroundColor: 'black', color: 'white', fontSize: '2rem', borderRadius: '50%', width: '70px', height: '70px' }}>
            <i className="bi bi-skip-backward-fill"></i>
          </button>
          <button onClick={togglePlayer} className="btn btn-light" style={{ backgroundColor: 'black', color: 'white', fontSize: '2rem', borderRadius: '50%', width: '70px', height: '70px' }}>
            {isPaused ? <i className="bi bi-play-fill"></i> : <i className="bi bi-pause-fill"></i>}
          </button>
          <button onClick={nextTrackPlayer} className="btn btn-light" style={{ backgroundColor: 'black', color: 'white', fontSize: '2rem', borderRadius: '50%', width: '70px', height: '70px' }}>
            <i className="bi bi-skip-forward-fill"></i>
          </button>
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
