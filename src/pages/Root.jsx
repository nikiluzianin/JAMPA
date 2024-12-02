import { Outlet } from "react-router-dom";
import Header from "../viewlayout/Header/Header"
import Footer from "../viewlayout/Footer/Footer";

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