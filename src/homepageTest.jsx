import "src/Homepage.css"
export const Homepage = () => {

    return (
        <div className='homepage'>
            <header>
                <Header></Header>
            </header>
            <main>
                <div className='sidebar'>
                    <Sidebar></Sidebar>
                </div>
                <div className='content'>
                    <HomePageMain />
                </div>
            </main>


        </div>
    )
}