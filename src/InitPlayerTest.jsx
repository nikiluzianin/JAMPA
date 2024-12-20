'use strict'

import './AuthTokenApi/AuthTokenApi.js'
import { getAccessToken, login, checkAccessToken } from './AuthTokenApi/AuthTokenApi.js'  // used to get the token for API calls
import './ApiFunctions/ApiFunctions.js'
import { fetchProfile, getTrack, playMusic, getAvailableDevices, startPlayback, pausePlayback } from './ApiFunctions/ApiFunctions.js' // Some API calls to understand how the work

import './Player/Player.js'
import { pausePlayer, preparePlayer, resumePlayer, checkPlayer, playMusicInPlayer } from './Player/Player.js'




function InitPlayerTest() {

    const getTrackInfoAction = () => {
        getTrack(getAccessToken(), "3WMbD1OyfKuwWDWMNbPQ4g").then(response => console.log(response));
    }

    const pausePlaybackAction = () => {
        pausePlayer();
    }

    const startPlaybackAction = () => {
        resumePlayer();
    }

    const playPlaylistAction = () => {
        playMusicInPlayer("playlist", "37i9dQZF1E8BgFtiYSPVv9");
        // playMusic(getAccessToken(), "playlist", "37i9dQZF1E8BgFtiYSPVv9").then(response => console.log(response));
    }

    const checkDevicesAction = () => {
        getAvailableDevices(getAccessToken()).then(console.log);
    }

    const preparePlayerAction = () => {
        preparePlayer();
    }

    const loginAction = () => {
        login();
    }

    const checkPlayerAction = () => {
        checkPlayer();
    }

    const getInitialToken = () => {
        checkAccessToken();
    }

    return (
        <>
            <div>
                <br />
                <br />
                <p>Init functions / token is created right after the login</p>
                <button className="button" onClick={loginAction}>Login</button>
                <button className="button" onClick={getInitialToken}>get initial token</button>

                <p>Player functions</p>
                <button className="button8" onClick={preparePlayerAction}>Player: prepare</button>
                <button className="button2" onClick={pausePlaybackAction}>Player: pause</button>
                <button className="button3" onClick={startPlaybackAction}>Player: play</button>
                <button className="button3" onClick={checkPlayerAction}>Player: check</button>
                <br />
                <br />

                <p>Api functions</p>
                <button className="button1" onClick={getTrackInfoAction}>get track info</button>
                <button className="button4" onClick={playPlaylistAction}>start playing my playlist</button>
                <button className="button5" onClick={checkDevicesAction}>check devices</button>




            </div>
        </>
    )
}

export default InitPlayerTest

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