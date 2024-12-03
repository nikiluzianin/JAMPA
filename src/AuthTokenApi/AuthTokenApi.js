'use strict'

const clientId = "dac95f7590c74699bc67d1b81f81f3b3"; // Client Id from Spotify App
const redurectUrl = "http://localhost:5173/callback"; // Callback URL
const scope = "user-read-private user-read-email streaming app-remote-control user-read-playback-state user-modify-playback-state playlist-modify-public playlist-modify-private";

const params = new URLSearchParams(window.location.search);
const code = params.get("code");

export function getAccessToken() {
    return localStorage.getItem('access_token');
}

// console.log("runs");
//checkAccessToken();

const lala = await checkAccessToken();

//console.log("asdasd " + lala)

//console.log("from script " + await checkAccessToken());

export async function checkAccessToken() {
    // if (localStorage.hasOwnProperty('access_token') == false) {
    if (getAccessToken() == "undefined" || !getAccessToken()) {
        const newToken = await requestAccessToken(clientId, code);
        return await newToken;
    }
    /*else {
    await refreshToken(clientId, code);
    }*/
}

export async function login() {
    if (!code) {
        await redirectToAuthCodeFlow(clientId);
    } else {
        await checkAccessToken();
    }
}

export async function redirectToAuthCodeFlow(clientId) {
    const verifier = generateCodeVerifier(64);
    const challenge = await generateCodeChallenge(verifier);

    localStorage.setItem("verifier", verifier);

    const params = new URLSearchParams();
    params.append("client_id", clientId);
    params.append("response_type", "code");
    params.append("redirect_uri", redurectUrl);
    params.append("scope", scope);
    params.append("code_challenge_method", "S256");
    params.append("code_challenge", challenge);

    const authUrl = new URL("https://accounts.spotify.com/authorize")
    authUrl.search = new URLSearchParams(params).toString();
    window.location.href = authUrl.toString();
    localStorage.removeItem('access_token');
}


function generateCodeVerifier(length) {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    const values = crypto.getRandomValues(new Uint8Array(length));
    return values.reduce((acc, x) => acc + possible[x % possible.length], "");
}

async function generateCodeChallenge(codeVerifier) {
    const encoder = new TextEncoder();
    const data = new TextEncoder().encode(codeVerifier);
    const digest = await window.crypto.subtle.digest('SHA-256', data);
    return btoa(String.fromCharCode.apply(null, [...new Uint8Array(digest)]))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
}

export async function requestAccessToken(clientId, code) {
    const verifier = localStorage.getItem("verifier");

    const params = new URLSearchParams();
    params.append("client_id", clientId);
    params.append("grant_type", "authorization_code");
    params.append("code", code);
    params.append("redirect_uri", redurectUrl);
    params.append("code_verifier", verifier);

    const result = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params
    });

    const { access_token } = await result.json();
    localStorage.setItem('access_token', access_token);
    return await access_token;

}
// generates a new access_token and stores it

export async function refreshToken() {
    const refreshToken = localStorage.getItem('refresh_token');
    const url = "https://accounts.spotify.com/api/token";

    const payload = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            grant_type: 'refresh_token',
            refresh_token: refreshToken,
            client_id: clientId
        }),
    }
    const body = await fetch(url, payload);
    const response = await body.json();

    localStorage.setItem('access_token', response.accessToken);
    if (response.refreshToken) {
        localStorage.setItem('refresh_token', response.refreshToken);
    }
}
// refresh token that has been previously stored
// not sure how to handle this at this point

