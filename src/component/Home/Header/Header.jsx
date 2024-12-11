import logo from '../../../../public/logo.svg';

export const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark" style={{ height: '10vh' }}>
                <div className="d-flex align-items-center">
                    <a href="/" className="text-white text-decoration-none" >
                    <img src={logo} alt="Logo" style={{ height:'100px', marginRight: '80px', marginTop: '-20px',

                     }} />
                    </a>
                </div>
                <form className="form-inline mx-auto w-50 d-flex align-items-center">
                    <i className="bi bi-search text-white me-2"></i>
                    <input
                        className="form-control w-100 bg-transparent border border-white text-white"
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
