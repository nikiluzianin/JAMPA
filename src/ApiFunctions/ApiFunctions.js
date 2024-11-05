'use strict'

export async function fetchProfile(token) {
    const result = await fetch("https://api.spotify.com/v1/me", {
        method: "GET", headers: { Authorization: `Bearer ${token}` }
    });

    return await result.json();
}
// gets user profile

export async function getTrack(token, trackId) {
    const result = await fetch("https://api.spotify.com/v1/tracks/" + trackId, {
        method: "GET", headers: { Authorization: `Bearer ${token}` }
    });

    return await result.json();
}
// gets one song via id

