import { Outlet } from "react-router-dom";
import { Header } from "../component/Home/Header/Header";
import { Footer } from "../component/Home/Footer/Footer"
import { Sidebar } from "../component/Home/SideBar/Sidebar";
import { Popup, updatePlayerInfo } from "../Popup/Popup";
import { useEffect, useState } from "react";
import usePlayer from "../Player/usePlayer";
import { getUserPlaylists } from "../Playlists/Playlists";


const Root = ({ isLoggedin }) => {
    const [searchQuery, setSearchQuery] = useState();
    const [userPlayListsResponse, setUserPlayListsResponse] = useState();
    const [playListFetched, setPlayListFetched] = useState(false);

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

    const reloadPlayLists = () => {
        setPlayListFetched(!playListFetched);
    };

    useEffect(() => {
        getUserPlaylists().then(response => setUserPlayListsResponse(response));
    }, [playListFetched]);

    const startPlayingContent = (typeOfContent, contentId) => {
        playMusicInPlayer(typeOfContent, contentId);
    };

    const context = {
        startPlayingContent: startPlayingContent,
        searchQuery: searchQuery,
        userPlayListsResponse: userPlayListsResponse,
    };

    return (
        <div className="homepage">
            {/* Header */}
            <header className="position-sticky top-0  ">

                <Header searchInput={(query) => setSearchQuery(query)} />
            </header>

            {/* Main Content Area */}
            <main className="container-fluid bg-black  pb-5">
                <div className="row p-5">
                    {/* Sidebar (3 columns) */}
                    <div className="sidebar col-12 col-md-3 mt-4 bg-dark rounded p-4">
                        <Sidebar playListResponse={userPlayListsResponse} reloadPlayLists={reloadPlayLists} />
                    </div>

                    {/* Main Content (Remaining columns for Outlet) */}
                    <div className="content col-12 col-md-9 ms-auto mt-4">
                        <Outlet context={context} />
                    </div>
                </div>
                <Popup
                    togglePlayer={togglePlayer}
                    nextTrackPlayer={nextTrackPlayer}
                    previousTrackPlayer={previousTrackPlayer}
                    setPlayerVolume={setPlayerVolume}
                    isPaused={isPaused}
                />

            </main>
            <div className="">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;
