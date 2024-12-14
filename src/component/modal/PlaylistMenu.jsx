import { useOutletContext } from "react-router-dom";
import { addSongToPlaylist } from "../../Playlists/Playlists";

export const PlaylistMenu = ({trackId}) => {
    const {playListResponse} = useOutletContext();
    const playlists = playListResponse ? playListResponse.items.map(item => ({
        id: item.id,
        name: item.name,
    })) : [];

    const addSongsToPlaylist = (playlistId) => {
        addSongToPlaylist(playlistId, trackId);
    }
    
    return (
        <div className={"row-menu"}> 
            <h5>Playlists</h5>
            <ul>
                {playlists.map((playlist, index) => <li onClick={() => addSongsToPlaylist(playlist.id)} key={index}>
                    <i className={"bi bi-plus"}></i>
                    <span>{playlist.name}</span>
                    
                </li>)}
            </ul>
        </div>
    )
}