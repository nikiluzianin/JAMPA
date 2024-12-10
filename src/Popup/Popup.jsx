import React, { useEffect, useState } from 'react';
import './Popup.css'; // Import the custom styles
import { previousTrackPlayer, togglePlayer, nextTrackPlayer, getCurrentTrack } from '../Player/Player';






const Popup = () => {

  const [currentPlayingTrackName, setCurrentPlayingTrackName] = useState("Nothing");


  useEffect(() => {
    document.getElementById("songname").textContent = currentPlayingTrackName;
    console.log("asd");
  }, [currentPlayingTrackName]);

  async function updateTrackInfo() {

    const lala = getCurrentTrack().then((response) => {
      console.log(response);
      setCurrentPlayingTrackName("sadf");
    });


    // document.getElementById("songname").textContent = currentPlayingTrackName;
  }

  return (
    <div className="popup-container">
      {/* Song Info */}
      <div className="song-info">
        <img src="src/Popup/img12.jpg" alt="Album Art" />
        <div>
          <p id="songname">Nothing</p>
          <p className="artistname">Nothing</p>
        </div>
      </div>

      {/* Playback Controls */}
      <div className="playback-container">
        <div className="playback-buttons d-flex justify-content-center gap-3 mb-2">
          <button onClick={previousTrackPlayer}> <img src="src/Popup/prev.png" alt="Previous" /></button>
          <button onClick={togglePlayer}><img src="src/Popup/play.png" alt="Play" /></button>
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
        <div className="volume-bar progress">
          <div className="volume-bar-filled progress-bar"></div>
        </div>
      </div>
    </div >
  );
};

export default Popup;
