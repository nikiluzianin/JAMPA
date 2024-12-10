import { Outlet } from "react-router-dom";
import { Header } from "../component/Home/Header/Header"
import { Footer } from "../component/Home/Footer/Footer";
import { Sidebar } from "../component/Home/SideBar/Sidebar"
import Popup from "../Popup/Popup"
import { preparePlayer, playMusicInPlayer } from '../Player/Player'
import "../component/Home/homepagemain/HomePageMain.css"
import { useState } from "react";
import '../component/Home/HomePage/Homepage.css'


const Root = ({ isLoggedin }) => {

    const [currentMedia, setCurrentMedia] = useState([,]);

    if (isLoggedin) preparePlayer();

    const startPlayingContent = (typeOfContent, contentId) => {
        setCurrentMedia([typeOfContent, contentId]);
        playMusicInPlayer(typeOfContent, contentId);
    }

    return (
        <div className='homepage'>
            <header>
                <Header />
            </header>
            <main>
                <div className='sidebar'>
                    <Sidebar />
                </div>
                <div className='content'>
                    <Outlet context={startPlayingContent} />
                </div>
            </main>

            <Popup />

            < Footer />
        </div>
    )
}

export default Root