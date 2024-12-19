import './Splashpage.css';
import Logo from '../Logo/Logo.jsx';
import { useNavigate } from 'react-router-dom';

const Splashpage = props => {

    const navigate = useNavigate();

    const loginActionWithRedirect = () => {
        props.click().then(console.log("loggedin"));
        navigate("/home");
    }

    return (
        <div className='loginpage'>
            <Logo />
            <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700', marginTop: -100 }}>what's your vibe?</h2>
            <button onClick={loginActionWithRedirect} style={{ marginTop: 60, borderRadius: 15 }}>ENTER</button>
        </div>
    )
}

export default Splashpage;