import { Outlet } from "react-router-dom";
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