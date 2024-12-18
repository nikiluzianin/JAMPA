import React from 'react';
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
    <div className="popup">
      <div className="popup-container">
      {/* Song Info */}
      <div className="song-info p-2">
        <img id="songpic" src="src/Popup/white-question-mark.svg" alt="Album Art" />
        <div className='text-white'>
          <p id="songname">Nothing</p>
          <p id="artistname">Nothing</p>
        </div>
      </div>

      {/* Playback Controls */}
      <div className="playback-container">
        <div className="playback-buttons d-flex justify-content-center gap-3">
          <button className="btn btn-outline-secondary" onClick={previousTrackPlayer}>
            <i className="bi bi-skip-backward-fill"></i>
          </button>
          <button className="btn btn-outline-secondary" onClick={togglePlayer}>
            {isPaused ? (
              <i className="bi bi-play-fill"></i>
            ) : (
              <i className="bi bi-pause-fill"></i>
            )}
          </button>
          <button className="btn btn-outline-secondary" onClick={nextTrackPlayer}>
            <i className="bi bi-skip-forward-fill"></i>
          </button>
        </div>
         <div className="d-flex align-items-center gap-3">
         
          
         
        </div>
      </div>

      {/* Volume Controls */}
      <div className="volume-container d-flex align-items-center gap-3 p-2">
        <i className="bi bi-volume-up text-white"></i>
        <input type="range" min="0" max="100" className="form-range" id="volumeRange" onChange={changeVolume}></input>
      </div>
    </div>
    </div>
  );
};
