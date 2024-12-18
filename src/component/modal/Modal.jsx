import './Modal.css';
import { TrackRow } from "./TrackRow";
import { useState } from "react";

const ModalComponent = ({ title, children, onClose }) => {
    return (
        <div className={"modal"} id={"staticBackdrop"} data-bs-backdrop={"static"} data-bs-keyboard={"false"} aria-labelledby={"staticBackdropLabel"} aria-hidden={"true"}>
            <div className={"modal-dialog modal-dialog-centered modal-dialog-scrollable"}>
                <div className={"modal-content"} id={"id-modal-content"}>
                    <div className={"modal-header"}>
                        <h1 className={"modal-title fs-5"} id={"staticBackdropLabel"}>{title}</h1>
                        <button type={"button"} className={"btn-close"} data-bs-dismiss={"modal"} aria-label={"Close"} onClick={onClose} ></button>
                    </div>
                    <div className={"modal-body"}>
                        {children}
                    </div>
                    <div className={"modal-footer"}>
                        <button type={"button"} className={"btn btn-secondary"} data-bs-dismiss={"modal"} onClick={onClose} >Close</button>
                        <a href='#songList'>BackToTop</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

/* tracks = [
    {
        id: "",
        name: "",
        imageUrl: "",
        duration: 10,
        artist: "",
    }
]
 */
export const Modal = ({title, onClose, tracks, playlistId, reFetchPlaylist}) => {
   const [openMenuId, setOpenMenuId] = useState(null);
 
    return (
        <ModalComponent title={title} onClose={onClose} >
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
                        {tracks.map(track => 
                            <TrackRow 
                                key={track.id}
                                track={track}
                                isMenuOpen={openMenuId === track.id}
                                setOpenMenuId={setOpenMenuId}
                                playlistId={playlistId}
                                reFetchPlaylist={reFetchPlaylist}
                            />
                        )}
                        </tbody>
                    </table>  
                </div>
            </>
        </ModalComponent>
    )
}