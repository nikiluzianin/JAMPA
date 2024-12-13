'use strict'

import { fetchProfile } from "../ApiFunctions/ApiFunctions"
import { getAccessToken } from "../AuthTokenApi/AuthTokenApi"

let userId;

//code to get spotify id
export const getSpotifyId = async () => {
    try {
        const profile = await fetchProfile(getAccessToken());
        userId = profile.id;
        console.log(userId);
    } catch (error) {
        console.error('Error fetching profile:', error);
    }
};

//it will give you a search functionality
//it will let you give you album,playlist,artist and tracks
export async function searchSpotify(query) {
    try {
        const response = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=album,playlist,artist,track`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${getAccessToken()}`
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching search results:', error);
    }
}

//getting the playlist

let playlistId;

export const getPlaylistItems = async (playlistId) => {
    const response = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
        headers: {
            'Authorization': `Bearer ${getAccessToken()}`
        }
    });
    const data = await response.json();
    return data;
}

// gives you playlist cover photo
export const getPlaylistCoverPhoto = async (playlistId) => {
    const response = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/images`, {
        headers: {
            'Authorization': `Bearer ${getAccessToken()}`
        }
    });
    const data = await response.json();
    return data;
}

//create a new playlist
// stops working. hope to fix it soon
let playlistName, playlistDescription, isPublic;

export const createPlaylist = async (playlistName, playlistDescription, isPublic) => {

    const playlistData = {
        name: playlistName,
        description: playlistDescription,
        public: isPublic
    };

    try {
        const response = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${getAccessToken()}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(playlistData)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Playlist created successfully:', data);
    } catch (error) {
        console.error('Error creating playlist:', error);
    }
}

// get user playlists
export const getUserPlaylists = async () => {  
    try {
        const response = await fetch(`https://api.spotify.com/v1/me/playlists`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${getAccessToken()}`,
                'Content-Type': 'application/json'
            },
        });
        const data = await response.json();
        return data;
    } catch (error) {   
        console.error('Error fetching user playlists:', error);
    }
}

export const getAlbum = async (albumId) => {   // get album data
    try {
        const response = await fetch(`https://api.spotify.com/v1/albums/${albumId}`, {
            headers: {
                'Authorization': `Bearer ${getAccessToken()}`
            }
        });
        const data = await response.json();
        console.log(`fetch data for album ${albumId}`);
        return data;
    } catch (error) {
        console.error(error.message);
        throw(error);
    }  
}

export const getArtistTopTracks = async (artistId) => {  // get Artist top tracks data
   try {
        const response = await fetch(`https://api.spotify.com/v1/artists/${artistId}/top-tracks`,{
            headers: {
                'Authorization': `Bearer ${getAccessToken()}`
            }
        });
        const data = await response.json();
        console.log(`fetch data from get artist top tracks ${artistId}`);
        return data;
   } catch (error) {
        console.error(error.message);
        throw(error);
   }
}












