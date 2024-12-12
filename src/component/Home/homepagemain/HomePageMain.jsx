import { useEffect, useState } from "react";
import { MoodModal } from "../../modal/MoodModal";
import './HomePageMain.css';
import { CardPanel } from "../../cardpanel/CardPanel";
import { searchSpotify } from "../../../Playlists/Playlists";
import '../../cardpanel/CardPanel.css';
import { AlbumModal } from '../../modal/AlbumModal';
import { ArtistModal } from "../../modal/ArtistModal";

export const HomePageMain = ({searchQuery}) => {
    const [showMoodModal, setShowMoodModal] = useState(false);
    const [selectedAlbumId, setSelectedAlbumId] = useState();
    const [selectedArtistId, setSelectedArtistId] = useState();
    const [mood, setMood] = useState();
    const [searchResult, setSearchResult] = useState();

    useEffect(() => {
        searchSpotify(searchQuery && searchQuery.trim() !== "" ? searchQuery.trim() : "top songs")
            .then(response => setSearchResult(response));
    }, [searchQuery]);

    const moodButtonClickHandler = (mood) => {
        setShowMoodModal(true);
        setMood(mood);
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
        <>
            <div className="main-container">
                <div className="mood-button-container">
                    {moods.map((moodItem, index) =>
                        <button key={`mood-button-${index}`} className="mood-button" onClick={() => moodButtonClickHandler(moodItem)}>
                            {moodItem}
                        </button>
                    )}
                </div>
                <div className="card-sections">
                    <div className="card-panel-section">
                        <h3>Albums</h3>
                        <CardPanel cards={albums} selectCard={(id) => setSelectedAlbumId(id)} />
                    </div>
                    <div className="card-panel-section">
                        <h3>Artists</h3>
                        <CardPanel cards={artists} selectCard={(id) => setSelectedArtistId(id)} />
                    </div>
                    <div className="card-panel-section">
                        <h3>Tracks</h3>
                        <CardPanel cards={tracks} selectCard={() => { }} />
                    </div>
                </div>
            </div>
            <div>
                {showMoodModal && <MoodModal mood={mood} onClose={() => setShowMoodModal(false)} />}
                {selectedAlbumId && <AlbumModal albumId={selectedAlbumId} onClose={() => setSelectedAlbumId()} />}
                {selectedArtistId && <ArtistModal artistId={selectedArtistId} onClose={() => setSelectedArtistId()} />}
            </div>
        </>
    );
};
