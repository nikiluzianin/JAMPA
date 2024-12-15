import { useEffect, useState } from "react";
import { Modal } from "./Modal";
import { getPlaylistItems } from "../../Playlists/Playlists";


export const PlayListModal = ({playList, onClose}) => {
    const [playListResponse, setPlayListResponse] = useState();
   
    useEffect(() => {
        getPlaylistItems(playList.id).then(response => {
            setPlayListResponse(response);
        })
    }, [playList]);

    const playListTracks = playListResponse ? playListResponse.items
    .filter(item => item.track.name)
    .map(item => ({
        id: item.track.id,
        name: item.track.name,
        imageUrl: item.track.album.images[0].url,
        duration: item.track.duration_ms,
        artist: item.track.artists[0].name,
    }))
    : [];

    return (
        <Modal title={playList.name} onClose={onClose} tracks={playListTracks} hideMenuModal={true}/>
    )
}