'use strict'

export async function fetchProfile(token) {
    const result = await fetch("https://api.spotify.com/v1/me", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` }
    });

    return await result.json();
}
// gets user profile

export async function getTrack(token, trackId) {
    const result = await fetch("https://api.spotify.com/v1/tracks/" + trackId, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` }
    });

    return await result.json();
}
// gets one song via id


export async function playMusic(token, typeOfContext, contextId) {

    if (!typeOfContext) {
        const result = await fetch("https://api.spotify.com/v1/me/player/play", {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
    } else {
        const result = await fetch("https://api.spotify.com/v1/me/player/play", {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'context_uri': `spotify:${typeOfContext}:${contextId}`,
            })

        });
    }
    // return await result.json();
}
// gets one song via id

export async function startPlayback(token) {
    return playMusic(token);
}

export async function pausePlayback(token) {
    const result = await fetch("https://api.spotify.com/v1/me/player/pause", {
        method: "PUT",
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

export async function getAvailableDevices(token) {
    const result = await fetch("https://api.spotify.com/v1/me/player/devices", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` }
    });

    return await result.json();
}

