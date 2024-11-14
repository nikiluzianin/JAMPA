import './MoodModal.css';
import { happySearch } from './data';



const TrackRow = ({trackName, albumImageUrl, duration, artistName}) => {
    const msToTime = (durationInMs)=> {
        const seconds = parseInt((durationInMs/1000)%60);
        const minutes = parseInt(Math.round((durationInMs/1000)/60));

        return `${minutes}:${seconds}`
    }
    return (
        <tr>
            <td className={"track"}>
                <div className={"track-name"}>
                    <img className={"track-image"} src={albumImageUrl}></img>
                    <p>{trackName}</p>
                </div>
            </td>
            <td className={"artist"}>
                <p>{artistName}</p>
            </td>
            <td>
                <p>{msToTime(duration)}</p>
            </td>
        </tr>
    )
}

const Modal = ({ title, children, setShowModal }) => {
    const closeModalHandler = () => {
        setShowModal(false);
    }

    const backToTop = () => {

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
                   {/*  <button type={"button"} className={"btn btn-primary"}>backToTop</button> */}
                </div>
                </div>
            </div>
        </div>
    )
}

export const MoodModal = ({mood, setShowModal}) => {
    const tracks = happySearch.tracks;

    return (
        <Modal title={mood} setShowModal={setShowModal} >
            <>
                <div id={"songList"} className={'header-image'}></div>
                <div className={"modal-dialog modal-dialog-scrollable"}>
                    <table className={"track-table"}>
                        <tr>
                            <th>Track</th>
                            <th>Artist</th>
                            <th>Duration</th>
                        </tr>
                        {tracks.items.map(track => 
                            <TrackRow key={track.id} 
                            trackName={track.name} 
                            albumImageUrl={track.album.images[0].url} 
                            duration={track.duration_ms}
                            artistName={track.artists[0].name}/>
                        )}
                    </table>
                    
                </div>
            </>
        </Modal>
    )   

}


