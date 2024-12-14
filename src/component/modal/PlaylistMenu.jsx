import { useOutletContext } from "react-router-dom";
import { addSongToPlaylist } from "../../Playlists/Playlists";

export const PlaylistMenu = ({trackId, handleMenuToggle}) => {
    const {playListResponse} = useOutletContext();
    const playlists = playListResponse ? playListResponse.items.map(item => ({
        id: item.id,
        name: item.name,
    })) : [];

    const addSongsToPlaylist = (playlistId) => {
        addSongToPlaylist(playlistId, trackId).then(added => console.log(added));
        handleMenuToggle(null);
    }
    
    return (
        <div className={"row-menu"}> 
            <div className={"row-menu-header"}>
                <h5>Playlists</h5>
                <i onClick={() => handleMenuToggle(null)} className={"bi bi-x-lg"}></i>
            </div>
            
            <ul>
                {playlists.map((playlist, index) => <li onClick={() => addSongsToPlaylist(playlist.id)} key={index}>
                    <i className={"bi bi-plus"}></i>
                    <span>{playlist.name}</span>
                    
                </li>)}
            </ul>
        </div>
    )
}