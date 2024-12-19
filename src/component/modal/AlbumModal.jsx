import { useEffect, useState } from 'react';
import { getAlbum } from '../../Playlists/Playlists';
import { Modal } from './Modal';
import defaultImage from '../../images/default.jpg';

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
    const albumImage = albumResponse?.images[0]?.url || defaultImage;
    return (
        <Modal title={albumName} onClose={onClose} tracks={albumTracks} imageSrc={albumImage}/>      
    )

}