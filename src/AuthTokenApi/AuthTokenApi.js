'use strict'

const clientId = "dac95f7590c74699bc67d1b81f81f3b3"; // Client Id from Spotify App
const params = new URLSearchParams(window.location.search);
const code = params.get("code");
let accessToken = undefined;

const redurectUrl = "http://localhost:5173/callback";

export function getAccessToken() {
    return accessToken;
}

if (!code) {
    redirectToAuthCodeFlow(clientId);
} else {
    accessToken = await requestAccessToken(clientId, code);
}

export async function redirectToAuthCodeFlow(clientId) {
    const verifier = generateCodeVerifier(64);
    const challenge = await generateCodeChallenge(verifier);

    localStorage.setItem("verifier", verifier);

    const params = new URLSearchParams();
    params.append("client_id", clientId);
    params.append("response_type", "code");
    params.append("redirect_uri", redurectUrl);
    params.append("scope", "user-read-private user-read-email");
    params.append("code_challenge_method", "S256");
    params.append("code_challenge", challenge);

    const authUrl = new URL("https://accounts.spotify.com/authorize")
    authUrl.search = new URLSearchParams(params).toString();
    window.location.href = authUrl.toString();
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
    return access_token;

}
