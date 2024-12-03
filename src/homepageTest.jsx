import "src/Homepage.css"
export const Homepage = () => {

    return (
        <div className='homepage'>
            <header>
                <h1>header</h1>
            </header>
            <main>
                <div className='sidebar'>
                    <h3>Sidebar</h3>
                </div>
                <div className='content'>
                    <h3>Content</h3>
                </div>
            </main>
            <footer>
                <h3>copyright Jampa</h3>
            </footer>
            <div className='popup'><h3>popup player</h3></div>
        </div>
    )
}