import { Outlet } from "react-router-dom";
import Header from "../viewlayout/Header/Header"
import Footer from "../viewlayout/Footer/Footer";
import { pausePlayer, preparePlayer, resumePlayer, checkPlayer } from '../Player/Player'


const Root = () => {


    /*
        return (
            <div>
                <Header loggedIn={loggedIn} />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </div>
        );*/

    preparePlayer();

    return (
        <div>
            <main>
                <Header />
                <p>It is in root </p>
                <Outlet />
                <Footer />
            </main>
        </div>
    )
}

export default Root