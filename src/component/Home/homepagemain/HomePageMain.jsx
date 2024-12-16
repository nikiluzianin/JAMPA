import { useEffect, useState } from "react";
import { MoodModal } from "../../modal/MoodModal";
import { CardPanel } from "../../cardpanel/CardPanel";
import { searchSpotify } from "../../../Playlists/Playlists";
import '../../cardpanel/CardPanel.css';
import { AlbumModal } from '../../modal/AlbumModal';
import { ArtistModal } from "../../modal/ArtistModal";
import { useOutletContext } from "react-router-dom";

export const HomePageMain = () => {
    const [showMoodModal, setShowMoodModal] = useState(false);
    const [selectedAlbumId, setSelectedAlbumId] = useState(null);
    const [selectedArtistId, setSelectedArtistId] = useState(null);
    const [mood, setMood] = useState(null);
    const [searchResult, setSearchResult] = useState(null);
    const { searchQuery } = useOutletContext();

    useEffect(() => {
        const query = searchQuery && searchQuery.trim() !== ""
            ? searchQuery.trim()
            : "top songs";

        searchSpotify(query)
            .then(response => setSearchResult(response))
            .catch(error => {
                console.error("Error searching Spotify:", error);
                setSearchResult(null);
            });
    }, [searchQuery]);

    const moodButtonClickHandler = (selectedMood) => {
        setShowMoodModal(true);
        setMood(selectedMood);
    };

    const albums = searchResult ? searchResult.albums.items.map(albumItem => ({
        id: albumItem.id,
        imageHref: albumItem.images[0]?.url,
        name: albumItem.name,
    })) : [];

    const artists = searchResult ? searchResult.artists.items.map(artistItem => ({
        id: artistItem.id,
        imageHref: artistItem.images[0]?.url,
        name: artistItem.name,
    })) : [];

    const tracks = searchResult ? searchResult.tracks.items.map(trackItem => ({
        id: trackItem.id,
        imageHref: trackItem.album.images[0]?.url,
        name: trackItem.name,
    })) : [];

    const moods = ["Happy", "Angry", "Sad", "Holiday", "Party", "Laugh", "Bored", "Natural"];

    return (
        <div className="homepage-main-container">
            <div className="bg-dark p-4 ">
                {/* Mood Buttons */}
                <div className="mood-button-container  text-center mb-4">
                    {moods.map((moodItem, index) => (
                        <button
                            key={`mood-button-${index}`}
                            className="btn btn-outline-danger mx-2 mb-2"
                            onClick={() => moodButtonClickHandler(moodItem)}
                        >
                            {moodItem}
                        </button>
                    ))}
                </div>

                {/* Main Content Sections */}
                <div className="row">
                    {/* Albums Section */}
                    <div className="col-12 mb-4">
                        <h3 className="text-white">Albums</h3>
                        <CardPanel
                            cards={albums}
                            selectCard={(id) => setSelectedAlbumId(id)}
                        />
                    </div>

                    {/* Artists Section */}
                    <div className="col-12 mb-4">
                        <h3 className="text-white">Artists</h3>
                        <CardPanel
                            cards={artists}
                            selectCard={(id) => setSelectedArtistId(id)}
                        />
                    </div>

                    {/* Tracks Section */}
                    <div className="col-12 mb-4">
                        <h3 className="text-white">Tracks</h3>
                        <CardPanel
                            cards={tracks}
                            selectCard={() => { }}
                        />
                    </div>
                </div>
            </div>

            {/* Modals */}
            <div>
                {showMoodModal && (
                    <MoodModal
                        mood={mood}
                        onClose={() => setShowMoodModal(false)}
                    />
                )}
                {selectedAlbumId && (
                    <AlbumModal
                        albumId={selectedAlbumId}
                        onClose={() => setSelectedAlbumId(null)}
                    />
                )}
                {selectedArtistId && (
                    <ArtistModal
                        artistId={selectedArtistId}
                        onClose={() => setSelectedArtistId(null)}
                    />
                )}
            </div>
        </div>
    );
};
