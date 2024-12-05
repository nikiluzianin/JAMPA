import { useNavigate } from "react-router-dom";
import { HomePageMain } from "../component/homepagemain/HomePageMain";


const Home = () => {

    const navigate = useNavigate();

    const goToModal = () => {
        navigate("/modal");
    }

    const goToPlayerTest = () => {
        navigate("/initPlayer");
    }

    return (
        <>
        <HomePageMain />
        {/* <div className='content'>
            <h3>Content</h3>
            <button className="button1" onClick={goToModal}>go to modal</button>
            <button className="button2" onClick={goToPlayerTest}>go to player test</button>

        </div> */}
        </>
    );
}

export default Home