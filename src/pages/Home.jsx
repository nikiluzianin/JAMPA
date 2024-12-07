import { useNavigate } from "react-router-dom";
import { HomePageMain } from "../component/homepagemain/HomePageMain";


const Home = () => {

    const navigate = useNavigate();

    const goToPlayerTest = () => {
        navigate("/initPlayer");
    }

    return (
        <>
        {/* update this part to insert header, footer, sidebaar and main, below compåonent is for main */}
        <HomePageMain />
        <button className="button2" onClick={goToPlayerTest}>go to player test</button>
        </>
    );
}

export default Home