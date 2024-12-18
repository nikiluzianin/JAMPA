import { PlaylistMenu } from "./PlaylistMenu";
import { removePlaylistItems } from "../../Playlists/Playlists";
import { useJampaContext } from "../../pages/Root";

export const TrackRow = ({track, isMenuOpen, setOpenMenuId, playlistId, reFetchPlaylist}) => {
    const { startPlayingContent, togglePlayer, playingContentId, isPaused } = useJampaContext();
    const isPlaying = playingContentId === track.id && !isPaused;

    const handlePlay = () => {
        if(playingContentId === track.id){
            togglePlayer();
            return;
        }
        startPlayingContent("track", track.id);
    }


    const handleMenuToggle = (trackId) => {
        setOpenMenuId(trackId);
    }

    const msToTime = (durationInMs)=> {
        const seconds = parseInt((durationInMs/1000)%60);
        const minutes = parseInt(Math.round((durationInMs/1000)/60));
        return `${minutes}:${seconds}`;
    }

    const shortenName = (name) => {
        const shortenLength = 17
        return name.length > shortenLength ? `${name.slice(0, shortenLength)}...` : name; 
    }

    const handleRemove = () => {
        removePlaylistItems(playlistId, track.id).then(success => {
            if(success){
                reFetchPlaylist();
                console.log("Removed track from playlist");
            }
        })
    }


    return (
        <>
        <tr className={"clickable-row"}>
            <td className={"track"}>
                <div className={"track-name"}>
                    <div className={"image-play-icon"}>
                        <div onClick={handlePlay} >
                            {isPlaying 
                            ? (<i className={"bi bi-pause-circle play-icon"}></i>) 
                            : (<i className={"bi bi-play-circle play-icon"} ></i>)}
                        </div>
                        <img className={"track-image"} src={track.imageUrl}></img>
                    </div>
                    <p className={"track-p"}>{shortenName(track.name)}</p>
                </div>
            </td>
            <td className={"artist"}>
                <p className={"track-p"}>{track.artist}</p>
            </td>
            <td>
                <p className={"track-p"}>{msToTime(track.duration)}</p>
            </td>
            {playlistId 
            ? ( <td>
                <div onClick={handleRemove}>
                    <i className={"bi bi-dash-circle"}></i>
                </div>
            </td>) 
            : (<td>
                <div className={"row-menu-container"}>
                    <div onClick={() => handleMenuToggle(track.id)}>
                        <i className={"bi bi-three-dots-vertical clickable-row-menu"} />
                    </div>
                    {isMenuOpen && <PlaylistMenu trackId={track.id} handleMenuToggle={handleMenuToggle}/>}
                </div>
            </td>)}    
        </tr>
        </>
    )
}