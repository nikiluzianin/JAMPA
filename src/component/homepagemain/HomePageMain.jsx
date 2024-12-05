import { useEffect, useState } from "react";
import { MoodModal } from "../modal/MoodModal";
import './HomePageMain.css';
import { CardPanel } from "../cardpanel/CardPanel";
import { searchSpotify } from "../../Playlists/Playlists";


export const HomePageMain = () =>{
    const [showModal, setShowModal] = useState(false);
    const [mood, setMood] = useState();
    const [searchResult, setSerachResult] = useState();
    
    useEffect(() => {
        searchSpotify("top songs").then(response => setSerachResult(response))
    }, []);

    const moodButtonClickHandler = (mood) => {
        setShowModal(true);
        setMood(mood)
    };

    const albums = searchResult ? searchResult.albums.items.map(albumItem => ({   // preparing top albums cards
        id: albumItem.id,
        imageHref: albumItem.images[0].url,
        name: albumItem.name,
    })) : [];

    const artists = searchResult ? searchResult.artists.items.map(artistItem => ({  //preparing top artists cards
        id: artistItem.id,
        imageHref: artistItem.images[0].url,
        name: artistItem.name,
    })) : [];

    const tracks = searchResult ? searchResult.tracks.items.map(trackItem => ({  //preparing top tracks cards
        id: trackItem.id,
        imageHref: trackItem.album.images[0].url,
        name: trackItem.name,
    })) : [];

    const moods = ["Happy", "Angry", "Sad", "Holiday", "Party", "Laugh", "Bored", "Sad", "Natural"]  // mood buttons

    return (
        <>
         <div className={"main-container"}>
            <div className={"mood-button-container"}>
                {moods.map((moodItem, index) => 
                    <button key={`mood-button-${index}`} className={"mood-button"} onClick={() => moodButtonClickHandler(moodItem)}>{moodItem}</button>
                )}
            </div>
            <div>
                <CardPanel header={"Albums"} cards={albums} />
                <CardPanel header={"Artists"} cards={artists} />
                <CardPanel header={"Tracks"} cards={tracks} />
            </div>
            
        </div>

        <div>
            {showModal && <MoodModal mood={mood} setShowModal={setShowModal} />}
        </div>
    </>
       

    )

};