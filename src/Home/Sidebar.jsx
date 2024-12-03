export const Sidebar = () => {
    return (
        <div className="homepage">
            <main className="d-flex">
                <div
                    className="sidebar px-sm-2 px-0"
                    style={{
                        backgroundColor: '#343a40',
                        width: '20%',
                        minHeight: '60vh',
                    }}
                >
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">

                        <ul
                            className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                            id="menu"
                        >
                            <li className="nav-item">
                                <button><i class="bi bi-plus"></i> create a playlist</button>
                            </li>
                        </ul>
                        <hr />
                    </div>
                </div>
                <div className="content flex-grow-1 bg-primary text-white p-3">
                    <h1>Content Section</h1>
                    <p>This is the content area.</p>
                </div>
            </main>
        </div>

    )
}