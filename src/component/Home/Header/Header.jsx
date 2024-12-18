import logo from '../../../assets/logo.svg';
import './Header.css';

export const Header = ({searchInput}) => {
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const searchValue = formData.get('search');
        searchInput(searchValue);
    };


    return (
        <div>
            <nav className="navbar navbar-dark bg-dark" style={{ height:'12vh', margin:'30'}}>

                <div className="d-flex align-items-center">
                    <a href="/" className="text-white text-decoration-none" >
                    <img src={logo} alt="Logo" style={{ height:'100px', marginRight: '80px', marginTop: '-20px',

                     }} />
                    </a>
                </div>

                <form onSubmit={handleSubmit} className="form-inline mx-auto w-50 d-flex align-items-center">
                    <i className="bi bi-search text-white me-2"></i>
                    <input
                        className="form-control w-100 bg-transparent border border-white text-white"
                        name="search"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        style={{ boxShadow: 'none' }}      
                    />
                </form>
            </nav>
        </div>
    );
};
