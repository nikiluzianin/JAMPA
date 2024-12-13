import { useNavigate, useOutletContext } from "react-router-dom";
import { HomePageMain } from "../component/Home/homepagemain/HomePageMain";


const Home = () => {


    const {startPlayingContent} = useOutletContext();
    const navigate = useNavigate();



    const startPlayingMyPlalist = () => {
        startPlayingContent("playlist", "37i9dQZF1E8BgFtiYSPVv9");
    }

    return (
        <>
            {/* update this part to insert header, footer, sidebaar and main, below compåonent is for main */}
            <HomePageMain startPlayingContent={startPlayingContent} />
            <button className="button2" onClick={startPlayingMyPlalist}>go to player test</button>
        </>
    );
}

export default Home