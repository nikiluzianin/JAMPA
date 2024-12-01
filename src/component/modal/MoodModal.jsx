import './MoodModal.css';
import { Modal } from './Modal';
import { TrackRow } from './TrackRow';
import { searchSpotify } from '../../Playlists/Playlists';
import { useEffect, useState } from 'react';


export const MoodModal = ({mood, setShowModal}) => {
    const [trackItems, setTrackItems] = useState([]);
    
      
    useEffect(() => {
        searchSpotify(mood).then(response => {
            setTrackItems(response.tracks.items);
        })
    }, [mood]);

    return (
        <Modal title={mood} setShowModal={setShowModal} >
            <>
                <div id={"songList"} className={'header-image'}></div>
                <div className={"modal-dialog modal-dialog-scrollable"}>
                    <table className={"track-table"}>
                        <tbody>
                        <tr>
                            <th>Track</th>
                            <th>Artist</th>
                            <th>Duration</th>
                        </tr>
                        {trackItems.map(track => 
                            <TrackRow 
                                key={track.id}
                                trackName={track.name} 
                                albumImageUrl={track.album.images[0].url} 
                                duration={track.duration_ms}
                                artistName={track.artists[0].name}
                            />
                        )}
                        </tbody>
                    </table>  
                </div>
            </>
        </Modal>
    )
}


