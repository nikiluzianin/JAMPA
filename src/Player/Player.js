'use strict'

import { getAccessToken } from '../AuthTokenApi/AuthTokenApi.js'
import { transferPlaybackTo } from '../ApiFunctions/ApiFunctions.js'

let player;
let deviceId;

// ** These functions are mostly for pivate usage - you do not really need them

/*if (getAccessToken()) {
    preparePlayer();
}*/

function getPlayer() {
    if (!player) {
        preparePlayer();
    }
    return player;
}

export function getDeviceId() {
    return deviceId;
}

export function checkPlayer() {
    console.log(getPlayer());
}

async function initializePlayer(accessToken) {
    import("https://sdk.scdn.co/spotify-player.js");

    window.onSpotifyWebPlaybackSDKReady = () => {
        const token = accessToken;
        const newPlayer = new Spotify.Player({
            name: 'JAMPA Player',
            getOAuthToken: cb => { cb(token); },
            volume: 0.5
        });

        newPlayer.addListener('ready', ({ device_id }) => {
            console.log('Ready with Device ID', device_id);
            deviceId = device_id;
            // newPlayer.activateElement();
            transferPlaybackTo(accessToken, deviceId);
        });

        // Not Ready
        newPlayer.addListener('not_ready', ({ device_id }) => {
            console.log('Device ID has gone offline', device_id);
        });

        newPlayer.addListener('initialization_error', ({ message }) => {
            console.error(message);
        });

        newPlayer.addListener('authentication_error', ({ message }) => {
            console.error(message);
        });

        newPlayer.addListener('account_error', ({ message }) => {
            console.error(message);
        });

        newPlayer.connect();
        player = newPlayer;
        return newPlayer;
    }
}

async function getCurrentStatePlayer() {
    getPlayer().getCurrentState().then(state => {
        if (!state) {
            console.error('User is not playing music through the Web Playback SDK');
            return;
        }

        var current_track = state.track_window.current_track;
        var next_track = state.track_window.next_tracks[0];

        console.log('Currently Playing', current_track);
        console.log('Playing Next', next_track);
    });
}

/*export async function activatePlayer() {
 
    player.activateElement();
    console.log(player);
    // Transfer your currently playing track into your
    // application through device picker in Spotify APP.
}*/

// ** end of functions for inside use

// ** below are functions for public usage, they include all the player actions

export async function pausePlayer() {
    player.pause().then(() => {
        console.log('Paused!');
    });
}

export async function resumePlayer() {

    if (getPlayer()) {
        getPlayer().resume().then(() => {
            console.log('Resumed!');
        });
    } else console.log("player is not ready yet");
}

export async function getPlayerVolume() {
    getPlayer().getVolume().then(volume => {
        let volume_percentage = volume * 100;
        console.log('The volume of the player is ${volume_percentage}%');
    });
}

export async function setPlayerVolume(newVolume) {
    getPlayer().setVolume(newVolume / 100).then(() => {
        console.log('Volume updated!');
    });
}

export async function togglePlayer() {
    getPlayer().togglePlay().then(() => {
        console.log('Toggled playback!');
    });
}

export async function previousTrackPlayer() {
    getPlayer().previousTrack().then(() => {
        console.log('Set to previous track!');
    });
}

export async function nextTrackPlayer() {
    getPlayer().nextTrack().then(() => {
        console.log('Skipped to next track!');
    });
}

export async function seekPositionPlayer(positionInSeconds) {
    getPlayer().seek(positionInSeconds * 1000).then(() => {
        console.log('Changed position!');
    });
}

export async function preparePlayer() {
    initializePlayer(getAccessToken());
}