'use strict'

let player;
let deviceId;

export function getPlayer() {
    return player;
}

export function getDeviceId() {
    return deviceId;
}

export function initializePlayer(accessToken) {
    import("https://sdk.scdn.co/spotify-player.js");

    window.onSpotifyWebPlaybackSDKReady = () => {
        const token = accessToken;
        player = new Spotify.Player({
            name: 'JAMPA Player',
            getOAuthToken: cb => { cb(token); },
            volume: 0.5
        });

        player.addListener('ready', ({ device_id }) => {
            console.log('Ready with Device ID', device_id);
            deviceId = device_id;
        });

        // Not Ready
        player.addListener('not_ready', ({ device_id }) => {
            console.log('Device ID has gone offline', device_id);
        });

        player.addListener('initialization_error', ({ message }) => {
            console.error(message);
        });

        player.addListener('authentication_error', ({ message }) => {
            console.error(message);
        });

        player.addListener('account_error', ({ message }) => {
            console.error(message);
        });

        player.connect();

    }
}
