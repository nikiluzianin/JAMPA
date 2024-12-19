import logo from '../../../assets/logo.svg';

export const Header = ({ searchInput }) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const searchValue = formData.get('search');
        searchInput(searchValue);
    };

    return (
        <div className="w-100 mx-auto">
            <nav className="navbar navbar-dark bg-dark position-sticky top-0">
                <div className="container-fluid">
                    {/* Logo Section */}
                    <a href="/" className="text-white text-decoration-none">
                        <img
                            src={logo}
                            alt="Logo"
                            className="logo"
                            style={{ maxHeight: '100px', marginTop: '-20px' }}
                        />
                    </a>

                    {/* Search Form Section */}
                    <form onSubmit={handleSubmit} className="d-flex w-50 mx-auto justify-content-center">
                        {/* Search Icon */}
                        <i className="bi bi-search text-white me-2"></i>

                        {/* Search Input */}
                        <input
                            className="form-control bg-transparent border border-white text-white"
                            name="search"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            style={{ boxShadow: 'none', color: 'white' }}  // Ensures input text is white
                        />
                    </form>
                </div>
            </nav>
        </div>
    );
};
