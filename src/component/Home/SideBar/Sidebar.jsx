import './Sidebar.css';
import { PlayListModal } from '../../modal/PlayListModal';
import { useState } from "react";
import { CreatePlaylist } from '../../createPlaylist/CreatePlaylist';
import { useJampaContext } from '../../../pages/Root';

const PlayListItem = ({ playlist, isSelected, selectPlaylist }) => {
    const { startPlayingContent, togglePlayer, playingContentId, isPaused } = useJampaContext();
    const isPlaying = playingContentId === playlist.id && !isPaused;

    const handlePlay = () => {
        if(playingContentId === playlist.id){
            togglePlayer();
            return;
        }
        startPlayingContent("playlist", playlist.id);
    }
    
    return (
        <li
            className={`playlist ${isSelected ? "selected-playlist" : ""}`}
        >
            <div onClick={() => selectPlaylist(playlist)}>
                <i className="bi bi-music-note-list"></i> {playlist.name}
            </div>
            <div onClick={handlePlay}>
                {isPlaying 
                    ? (<i className="bi bi-pause-circle" style={{ fontSize: '1.5em'}}></i>) 
                    : (<i className="bi bi-play-circle" style={{ fontSize: '1.5em'}}></i>)}
            </div>
        </li>
    )
};

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
                    <div className=" bg-dark mb-4">
                        <div className="create-playlist-container p-4">
                            <button className="rounded" onClick={() => setShowCreatePlayListModal(true)}>
                                <i className="bi bi-plus"></i> Create a Playlist
                            </button>
                        </div>
                        <div className="border-bottom my-4"></div>
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