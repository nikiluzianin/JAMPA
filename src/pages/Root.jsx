import { Outlet } from "react-router-dom";
import { Header } from "../Home/Header"
import { Footer } from "../Home/Footer";
import { Sidebar } from "../Home/Sidebar"
import Popup from "../Popup/Popup"
import { preparePlayer, playMusicInPlayer } from '../Player/Player'
import "../Homepage.css"
import { useState } from "react";


const Root = ({ isLoggedin }) => {

    const [currentMedia, setCurrentMedia] = useState([,]);

    if (isLoggedin) preparePlayer();

    const startPlayingContent = (typeOfContent, contentId) => {
        setCurrentMedia([typeOfContent, contentId]);
        playMusicInPlayer(typeOfContent, contentId);
    }

    return (
        <div className='homepage'>

            <Header />
            {/*<Sidebar />*/}

            <main>
                <Outlet context={startPlayingContent} />
            </main>
            <Popup />

            < Footer />
        </div>
    )
}

export default Root