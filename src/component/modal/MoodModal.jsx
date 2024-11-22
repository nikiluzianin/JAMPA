import './MoodModal.css';
import { searchSpotify } from '../../Playlists/Playlists';
import { useEffect, useRef, useState } from 'react';
import { AudioPreview } from './AudioPreview';



const TrackBar = ({progress}) => {
    return (
        <tr>
            <td colSpan={3} className='playbar-row'>
                <div style={{width:`${progress}%`}} className={"playbar"} />
            </td>
        </tr>
    )
}

const TrackRow = ({trackName, albumImageUrl, duration, artistName}) => {
    const msToTime = (durationInMs)=> {
        const seconds = parseInt((durationInMs/1000)%60);
        const minutes = parseInt(Math.round((durationInMs/1000)/60));

        return `${minutes}:${seconds}`
    }

    const shortenName = (name) => {
        return name.length > 21 ? `${name.slice(0, 21)}...` : name; 
    }

    return (
        <>
        <tr>
            <td className={"track"}>
                <div className={"track-name"}>
                    <div className={"image-play-icon"}>
                        <i className={"bi bi-play-circle play-icon"}></i>
                        <img className={"track-image"} src={albumImageUrl}></img>
                       
                    </div>
                    
                    <p className={"track-p"}>{shortenName(trackName)}</p>
                </div>
            </td>
            <td className={"artist"}>
                <p className={"track-p"}>{artistName}</p>
            </td>
            <td>
                <p className={"track-p"}>{msToTime(duration)}</p>
            </td>
        </tr>
        </>
     
    )
}

const Modal = ({ title, children, setShowModal }) => {
    const closeModalHandler = () => {
        setShowModal(false);
    }
    return (
        <div className={"modal"} id={"staticBackdrop"} data-bs-backdrop={"static"} data-bs-keyboard={"false"} aria-labelledby={"staticBackdropLabel"} aria-hidden={"true"}>
            <div className={"modal-dialog modal-dialog-centered modal-dialog-scrollable"}>
                <div className={"modal-content"} id={"id-modal-content"}>
                <div className={"modal-header"}>
                    <h1 className={"modal-title fs-5"} id={"staticBackdropLabel"}>{title}</h1>
                    <button type={"button"} className={"btn-close"} data-bs-dismiss={"modal"} aria-label={"Close"} onClick={closeModalHandler} ></button>
                </div>
                <div className={"modal-body"}>
                    {children}
                </div>
                <div className={"modal-footer"}>
                    <button type={"button"} className={"btn btn-secondary"} data-bs-dismiss={"modal"} onClick={closeModalHandler} >Close</button>
                    <a href='#songList'>BackToTop</a>
                </div>
                </div>
            </div>
        </div>
    )
}

export const MoodModal = ({mood, setShowModal}) => {
    const [searchResult, setSerachResult] = useState();
    
    const [previewUrl, setPreviewUrl] = useState();
    const audioRef = useRef(null);
    
    useEffect(() => {
        searchSpotify(mood).then(response => setSerachResult(response))
    }, [mood]);
    const trackItems = searchResult ? searchResult.tracks.items : [];

    const bar_progress = 10;

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
                        <>
                            <TrackRow key={track.id} 
                            trackName={track.name} 
                            albumImageUrl={track.album.images[0].url} 
                            duration={track.duration_ms}
                            artistName={track.artists[0].name}/>
                            <TrackBar progress={bar_progress} />
                        </>
                        )}
                        </tbody>
                    </table>  
                    <AudioPreview previewUrl={previewUrl} audioRef={audioRef}/>  
                </div>
            </>
        </Modal>
    )
}


