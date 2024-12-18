'use strict'

import { getAccessToken } from '../AuthTokenApi/AuthTokenApi.js'
import { transferPlaybackTo, playMusic, playTrack } from '../ApiFunctions/ApiFunctions.js'
import { useState } from 'react';

const usePlayer = () => {

    const [player, setPlayer] = useState(undefined);
    const [deviceId, setDeviceId] = useState(undefined);
    const [currentTrack, setCurrentTrack] = useState(undefined);
    const [playerVolumePercentage, setPlayerVolumePercentage] = useState(50);
    const [isPaused, setIsPaused] = useState(true);

    function getDeviceId() {
        return deviceId;
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
                setDeviceId(device_id);
                // newPlayer.activateElement();
                transferPlaybackTo(accessToken, device_id);
                // setPlayerState(newPlayer.getCurrentState());

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

            newPlayer.addListener('player_state_changed', (async state => {

                if (!state) {
                    return;
                }

                setCurrentTrack(await state.track_window.current_track);
            }));

            newPlayer.connect();
            setPlayer(newPlayer);
            return player;
        }
    }
    async function preparePlayer() {
        //if player
        initializePlayer(getAccessToken());
    }

    async function togglePlayer() {
        player.togglePlay().then(() => {
            console.log('Toggled playback!');
        });
        setIsPaused((prev) => !prev);
    }

    async function getPlayerVolume() {
        player.getVolume().then(async volume => {
            let volume_percentage = await volume * 100;
            console.log(`The volume of the player is ${volume_percentage}%`);
            return volume_percentage;
        });
    }

    async function setPlayerVolume(newVolume) {
        player.setVolume(newVolume / 100).then(() => {
            console.log('Volume updated!');
        });
        setPlayerVolumePercentage(newVolume);
    }

    async function previousTrackPlayer() {
        player.previousTrack().then(() => {
            console.log('Set to previous track!');
        });
    }

    async function nextTrackPlayer() {
        player.nextTrack().then(() => {
            console.log('Skipped to next track!');
        });
    }

    async function seekPositionPlayer(positionInSeconds) {
        player.seek(positionInSeconds * 1000).then(() => {
            console.log('Changed position!');
        });
    }

    async function playMusicInPlayer(typeOfContent, contentId) {
        if (typeOfContent === "track") {
            playTrack(getAccessToken(), contentId);
        } else {
            playMusic(getAccessToken(), typeOfContent, contentId);
        }
        setIsPaused(false);
    }

    return { currentTrack, playerVolumePercentage, isPaused, getDeviceId, preparePlayer, togglePlayer, getPlayerVolume, setPlayerVolume, previousTrackPlayer, nextTrackPlayer, seekPositionPlayer, playMusicInPlayer }
}

export default usePlayer;


