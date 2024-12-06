import { useEffect, useState } from 'react';
import './MoodModal.css';
import { getAlbum } from '../../Playlists/Playlists';
import { Modal } from './Modal';

export const AlbumModal = ({albumId, onClose}) => {
    const [albumResponse, setAlbumResponse] = useState();

    useEffect(() => {
        getAlbum(albumId).then(response => {
            setAlbumResponse(response);
        })
    }, [albumId]);

    const albumTracks = albumResponse ? albumResponse.tracks.items.map(item => ({
        id: item.id,
        name: item.name,
        imageUrl: albumResponse.images[0].url,
        duration: item.duration_ms,
        artist: item.artists[0].name,
    }))
    : [];

    const albumName = albumResponse ? albumResponse.name : "";
    return (
        <>
            <Modal title={albumName} onClose={onClose} tracks={albumTracks} />
        </>
        
    )

}