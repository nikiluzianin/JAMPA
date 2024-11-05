'use strict'

import './App.css'
import './AuthTokenApi/AuthTokenApi.js'
import { getAccessToken } from './AuthTokenApi/AuthTokenApi.js'  // used to get the token for API calls
import './ApiFunctions/ApiFunctions.js'
import { fetchProfile, getTrack, playMusic, getAvailableDevices, startPlayback, pausePlayback } from './ApiFunctions/ApiFunctions.js' // Some API calls to understand how the work


function App() {


  const clickHandler1 = () => {
    getTrack(getAccessToken(), "3WMbD1OyfKuwWDWMNbPQ4g").then(response => console.log("song name " + response.name));
  }

  const clickHandler2 = () => {
    pausePlayback(getAccessToken()).then(console.log("playback stopped"));
  }

  const clickHandler3 = () => {
    startPlayback(getAccessToken()).then(console.log("playback started"));
  }

  const clickHandler4 = () => {
    playMusic(getAccessToken(), "playlist", "37i9dQZF1E8BgFtiYSPVv9").then(console.log);
  }

  const player = (
    <h2>Player will be here hopefully</h2>
  );

  const playerScript = (
    <script src="https://sdk.scdn.co/spotify-player.js"></script>
  );
  // player is not working so far

  return (
    <>
      <div>
        {playerScript}
        {player}
        <button className="button1" onClick={clickHandler1}>get track</button>
        <button className="button2" onClick={clickHandler2}>pause playing</button>
        <button className="button3" onClick={clickHandler3}>resume playing</button>
        <button className="button4" onClick={clickHandler4}>start playing my playlist</button>

      </div>
    </>
  )
}

export default App
