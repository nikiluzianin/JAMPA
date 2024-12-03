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

    const albums = searchResult ? searchResult.albums.items.map(albumItem => ({
        imageHref: albumItem.images[0].url,
        name: albumItem.name,
    })) : [];
    const moodButtonClickHandler = (mood) => {
        setShowModal(true);
        setMood(mood)
    };

    const moods = ["Happy", "Angry", "Sad", "Holiday", "Party", "Laugh", "Bored", "Sad", "Natural"]

    return (
        <>
         <div className={"main-container"}>
            <div className={"mood-button-container"}>
                {moods.map((moodItem, index) => 
                    <button key={`mood-button-${index}`} className={"mood-button"} onClick={() => moodButtonClickHandler(moodItem)}>{moodItem}</button>
                )}
            </div>
            <div>
                <CardPanel header={"Albums"} cards={albums}/>
            </div>
            
        </div>

        <div>
            {showModal && <MoodModal mood={mood} setShowModal={setShowModal} />}
        </div>
    </>
       

    )

};