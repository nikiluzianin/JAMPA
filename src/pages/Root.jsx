import { Outlet } from "react-router-dom";
import Header from "../viewlayout/Header/Header"
import Footer from "../viewlayout/Footer/Footer";
import SideSection from "../viewlayout/SideSection/SideSection"
import { pausePlayer, preparePlayer, resumePlayer, checkPlayer } from '../Player/Player'
import { useEffect } from "react";


const Root = ({ isLoggedin }) => {

    if (isLoggedin) preparePlayer();

    return (
        <div>
            <main>
                <Header />
                <SideSection />
                <p>It is in root </p>
                <Outlet />
                <Footer />
            </main>
        </div>
    )
}

export default Root