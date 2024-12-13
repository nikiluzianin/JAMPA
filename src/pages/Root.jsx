import { Outlet } from "react-router-dom";
import { Header } from "../component/Home/Header/Header"
import { Footer } from "../component/Home/Footer/Footer";
import { Sidebar } from "../component/Home/SideBar/Sidebar"
import { Popup, updatePlayerInfo } from "../Popup/Popup"
// import { preparePlayer, playMusicInPlayer } from '../Player/Player'
import "../component/Home/homepagemain/HomePageMain.css"
import { useEffect, useState } from "react";
import '../component/Home/HomePage/Homepage.css'
import usePlayer from "../Player/usePlayer";


const Root = ({ isLoggedin }) => {
    const [searchQuery, setSearchQuery] = useState();

    const {
        currentTrack,
        playerVolumePercentage,
        isPaused,
        preparePlayer,
        playMusicInPlayer,
        togglePlayer,
        nextTrackPlayer,
        previousTrackPlayer,
        setPlayerVolume,
    } = usePlayer();

    if (isLoggedin) preparePlayer();

    useEffect(() => {
        updatePlayerInfo(currentTrack, playerVolumePercentage);

    }, [currentTrack]);

    const startPlayingContent = (typeOfContent, contentId) => {
        playMusicInPlayer(typeOfContent, contentId);
    }

    const context = {
        startPlayingContent: startPlayingContent,
        searchQuery: searchQuery,
    };

    return (
        <div className='homepage'>
            <header>
                <Header searchInput={(query) => setSearchQuery(query)} />
            </header>
            <main>
                <div className='sidebar'>
                    <Sidebar />
                </div>
                <div className='content'>
                    <Outlet context={context} />
                    <Popup togglePlayer={togglePlayer} nextTrackPlayer={nextTrackPlayer} previousTrackPlayer={previousTrackPlayer} setPlayerVolume={setPlayerVolume} isPaused={isPaused} />

                    < Footer />
                </div>
            </main>

        </div>
    )
}

export default Root