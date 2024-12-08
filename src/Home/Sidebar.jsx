export const Sidebar = () => {
    return (
        <div className="homepage">
            <main>
                {/* Sidebar */}
                <div
                    className="sidebar"
                    style={{
                        position: 'fixed',
                        top: '10%',
                        left: 0,
                        backgroundColor: '#343a40',
                        width: '20%',
                        height: 'auto',
                        minHeight: '90vh', // Remaining height after header
                    }}
                >
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white">
                        <ul
                            className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                            id="menu"
                        >
                            <li className="nav-item">
                                <button className="btn btn-light w-100">
                                    <i className="bi bi-plus"></i> Create a Playlist
                                </button>
                            </li>
                        </ul>
                        <hr className="w-100 text-white" />
                    </div>
                </div>
            </main>
        </div>
    );
};
