import { Outlet } from "react-router-dom";
import { Header } from "../Home/Header"
import { Footer } from "../Home/Footer";
import { Sidebar } from "../Home/Sidebar"
import SideSection from "../viewlayout/SideSection/SideSection"
import { preparePlayer } from '../Player/Player'


const Root = ({ isLoggedin }) => {

    if (isLoggedin) preparePlayer();

    return (
        <div>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Root