import './Sidebar.css';
import { PlayListModal } from '../../modal/PlayListModal';
import {useState} from "react";
import { CreatePlaylist } from '../../createPlaylist/CreatePlaylist';


const PlayListItem = ({playlist, isSelected, selectPlaylist}) => (
    <li onClick={() => selectPlaylist(playlist)} className={`playlist ${isSelected ? "selected-playlist" : ""}`}>
        <i className="bi bi-music-note-list"></i> {playlist.name}
    </li>
);


export const Sidebar = ({playListResponse, reloadPlayLists}) => {
    const [selectedPlaylist, setSelectedPlaylist] = useState();
    const [showCreatePlayListModal, setShowCreatePlayListModal] = useState(false);

    const selectPlaylist = (playlist) => {
        setSelectedPlaylist(playlist);
    }

    const playlists = playListResponse ? playListResponse.items.map(item => ({
        id: item.id,
        name: item.name,
    })) : [];

    return (
        <div className="homepage">
            <main>
                Sidebar
                <div
                    className="sidebar"
                    style={{
                        position: 'fixed',
                        top: '10%',
                        left: 0,
                        backgroundColor: '#343a40',
                        width: '20%',
                        height: 'auto',
                        minHeight: '90vh', // Remaining height after header
                    }}
                >
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white">
                        <button onClick={() => setShowCreatePlayListModal(true)} className="btn btn-light w-100">
                            <i className="bi bi-plus"></i> Create a Playlist
                         </button>
                        <hr className="w-100 text-white" />
                        <h5 className="text-white">Playlists</h5>
                        <ul className="list-group w-100">
                            {playlists.map((playlist) => (
                                <PlayListItem
                                    key={playlist.id}
                                    playlist={playlist}
                                    isSelected={selectedPlaylist && selectedPlaylist.id === playlist.id}
                                    selectPlaylist={selectPlaylist}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </main>
            {selectedPlaylist && <PlayListModal playList={selectedPlaylist} onClose={() => setSelectedPlaylist(null)} />}
            {showCreatePlayListModal && <CreatePlaylist onClose={() => setShowCreatePlayListModal(false)} reloadPlayLists={reloadPlayLists}/>}
        </div>
    );
};
