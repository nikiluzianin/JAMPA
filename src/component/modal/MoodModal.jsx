import { Modal } from './Modal';
import { searchSpotify } from '../../Playlists/Playlists';
import { useEffect, useState } from 'react';


export const MoodModal = ({mood, onClose}) => {
    /* const [trackItems, setTrackItems] = useState([]); */
    const [searchResult, setSerachResult] = useState();
    
      
    useEffect(() => {
        searchSpotify(mood).then(response => {
            setSerachResult(response);
        })
    }, [mood]);

    const tracks = searchResult ? searchResult.tracks.items.map(item => ({
        id: item.id,
        name: item.name,
        imageUrl: item.album.images[0].url,
        duration: item.duration_ms,
        artist: item.artists[0].name,
    }))
    : [];
    
    return (
        <>
            <Modal title={mood} onClose={onClose} tracks={tracks} />
        </>
        
    )
}


