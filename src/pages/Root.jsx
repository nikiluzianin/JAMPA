import { Outlet } from "react-router-dom";

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
                <Outlet />
            </main>
        </div>
    )
}

export default Root