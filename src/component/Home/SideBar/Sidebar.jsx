import './Sidebar.css';
import { PlayListModal } from '../../modal/PlayListModal';
import { useState } from "react";
import { CreatePlaylist } from '../../createPlaylist/CreatePlaylist';

const PlayListItem = ({ playlist, isSelected, selectPlaylist }) => (
    <li
        onClick={() => selectPlaylist(playlist)}
        className={`playlist ${isSelected ? "selected-playlist" : ""}`}
    >
        <i className="bi bi-music-note-list"></i> {playlist.name}
    </li>
);

export const Sidebar = ({
    playListResponse,
    reloadPlayLists
}) => {
    const [selectedPlaylist, setSelectedPlaylist] = useState(null);
    const [showCreatePlayListModal, setShowCreatePlayListModal] = useState(false);

    const selectPlaylist = (playlist) => {
        setSelectedPlaylist(playlist);
    };

    const playlists = playListResponse ? playListResponse.items.map(item => ({
        id: item.id,
        name: item.name,
    })) : [];

    return (
        <div className=" sidebar">
            <main className="">
                <div className="">
                    {/* Sidebar */}
                    <div className=" bg-black mb-4">
                        <div className="create-playlist-container p-4">
                            <button onClick={() => setShowCreatePlayListModal(true)}>
                                <i className="bi bi-plus"></i> Create a Playlist
                            </button>
                        </div>
                        <hr className="text-white" />
                        <h5 className="text-white">Playlists</h5>
                        <ul className="list-group">
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

            {/* Modals */}
            {selectedPlaylist && (
                <PlayListModal
                    playList={selectedPlaylist}
                    onClose={() => setSelectedPlaylist(null)}
                />
            )}
            {showCreatePlayListModal && (
                <CreatePlaylist
                    onClose={() => setShowCreatePlayListModal(false)}
                    reloadPlayLists={reloadPlayLists}
                />
            )}
        </div>
    );
};