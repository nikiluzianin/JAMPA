'use strict'

import './AuthTokenApi/AuthTokenApi.js'
import { getAccessToken } from './AuthTokenApi/AuthTokenApi.js'  // used to get the token for API calls
import './ApiFunctions/ApiFunctions.js'
import { fetchProfile, getTrack, playMusic, getAvailableDevices, startPlayback, pausePlayback, transferPlaybackTo } from './ApiFunctions/ApiFunctions.js' // Some API calls to understand how the work
// import './Player/Player.jsx'
// import Player from './Player/Player.jsx'

import './Player/Player.js'
import { initializePlayer, getPlayer, getDeviceId } from './Player/Player.js'


function InitPlayerTest() {


    const clickHandler1 = () => {
        getTrack(getAccessToken(), "3WMbD1OyfKuwWDWMNbPQ4g").then(response => console.log(response));
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

    const clickHandler5 = () => {
        getAvailableDevices(getAccessToken()).then(console.log);
    }

    const clickHandler6 = () => {
        console.log(getDeviceId());
        transferPlaybackTo(getAccessToken(), getDeviceId())
    }

    // {transferPlaybackTo(getDeviceId())}
    return (
        <>
            <div>
                <button className="button1" onClick={clickHandler1}>get track info</button>
                <button className="button2" onClick={clickHandler2}>pause playing</button>
                <button className="button3" onClick={clickHandler3}>resume playing</button>
                <button className="button4" onClick={clickHandler4}>start playing my playlist</button>
                <button className="button5" onClick={clickHandler5}>check devices</button>
                <button className="button6" onClick={clickHandler6}>transfer playback to this device</button>

                {initializePlayer(getAccessToken())}

            </div>
        </>
    )
}

export default InitPlayerTest
