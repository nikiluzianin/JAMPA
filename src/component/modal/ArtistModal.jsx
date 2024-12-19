import { useEffect, useState } from "react";
import { getArtist, getArtistTopTracks } from "../../Playlists/Playlists";
import { Modal } from "./Modal";

export const ArtistModal = ({artistId, onClose}) => {
    const [artistTopTracksResponse, setArtistTopTracksResponse] = useState();
    const [artistImage, setArtistImage] = useState();

    useEffect(() => {
        getArtistTopTracks(artistId).then(response => {
            setArtistTopTracksResponse(response);
        }).then(() => getArtist(artistId)).then(response =>  setArtistImage(response?.images[0]?.url));
    }, [artistId]);

    const artistTracks = artistTopTracksResponse ? artistTopTracksResponse.tracks.map(track => ({
        id: track.id,
        name: track.name,
        imageUrl: track.album.images[0].url,
        duration: track.duration_ms,
        artist: track.artists.filter(artist => artistId === artist.id)[0].name,
    }))
    : [];

    const artistName = artistTopTracksResponse ? artistTopTracksResponse.tracks[0].artists.filter(artist => artistId === artist.id)[0].name : "";

    return (
        <Modal title={artistName} onClose={onClose} tracks={artistTracks} imageSrc={artistImage}/>
    )
}