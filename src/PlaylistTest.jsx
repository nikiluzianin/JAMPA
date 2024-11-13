import { createPlaylist, getPlaylistCoverPhoto, getPlaylistItems, getSpotifyId } from "./Playlists/Playlists"

let playlistId = "3cEYpjA9oz9GiPac4AsH4n";

export const PlaylistTest = () => {
    const handleClick1 = () => {
        console.log(getPlaylistItems(playlistId))
    }

    const handleClick2 = () => {
        console.log(getPlaylistCoverPhoto(playlistId));
        ;
    }

    const handleClick3 = () => {
        createPlaylist("summer", "something cool", false)
    };

    const handleClick4 = () => {
        getSpotifyId();
    }
    return (
        <div>
            <button onClick={handleClick1}>getplaylistitems</button>
            <button onClick={handleClick2}>getPlaylistPhoto</button>
            <button onClick={handleClick3}>createPlaylist</button>
            <button onClick={handleClick4}>getspotifyId</button>
        </div>

    )
}