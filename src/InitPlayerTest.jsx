'use strict'

import './AuthTokenApi/AuthTokenApi.js'
import { getAccessToken } from './AuthTokenApi/AuthTokenApi.js'  // used to get the token for API calls
import './ApiFunctions/ApiFunctions.js'
import { fetchProfile, getTrack, playMusic, getAvailableDevices, startPlayback, pausePlayback } from './ApiFunctions/ApiFunctions.js' // Some API calls to understand how the work

import './Player/Player.js'
import { pausePlayer, preparePlayer, resumePlayer } from './Player/Player.js'




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
        playMusic(getAccessToken(), "playlist", "37i9dQZF1E8BgFtiYSPVv9").then(response => console.log(response));
    }

    const checkDevicesAction = () => {
        getAvailableDevices(getAccessToken()).then(console.log);
    }

    const preparePlayerAction = () => {
        preparePlayer();
    }

    return (
        <>
            <div>
                <button className="button8" onClick={preparePlayerAction}>Player: prepare</button>
                <button className="button2" onClick={pausePlaybackAction}>Player: pause</button>
                <button className="button3" onClick={startPlaybackAction}>Player: play</button>


                <button className="button1" onClick={getTrackInfoAction}>get track info</button>
                <button className="button4" onClick={playPlaylistAction}>start playing my playlist</button>
                <button className="button5" onClick={checkDevicesAction}>check devices</button>




            </div>
        </>
    )
}

export default InitPlayerTest
