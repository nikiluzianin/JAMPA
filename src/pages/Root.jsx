import { Outlet } from "react-router-dom";
import { Header } from "../component/Home/Header/Header"
import { Footer } from "../component/Home/Footer/Footer";
import { Sidebar } from "../component/Home/SideBar/Sidebar"
import { Popup, updatePlayerInfo } from "../Popup/Popup"
// import { preparePlayer, playMusicInPlayer } from '../Player/Player'
import "../component/Home/homepagemain/HomePageMain.css"
import { useEffect, useState } from "react";
import '../component/Home/HomePage/Homepage.css'
import PlayerNew from "../Player/PlayerNew";


const Root = ({ isLoggedin }) => {

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
    } = PlayerNew();

    if (isLoggedin) preparePlayer();

    useEffect(() => {
        updatePlayerInfo(currentTrack, playerVolumePercentage);

    }, [currentTrack]);

    const startPlayingContent = (typeOfContent, contentId) => {
        playMusicInPlayer(typeOfContent, contentId);
    }

    return (
        <div className='homepage'>
            <header>
                <Header />
            </header>
            <main>
                <div className='sidebar'>
                    {/*<Sidebar />*/}
                </div>
                <div className='content'>
                    <Outlet context={startPlayingContent} />
                </div>
            </main>

            <Popup togglePlayer={togglePlayer} nextTrackPlayer={nextTrackPlayer} previousTrackPlayer={previousTrackPlayer} setPlayerVolume={setPlayerVolume} isPaused={isPaused} />

            < Footer />
        </div>
    )
}

export default Root