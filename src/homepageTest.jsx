import '/Users/s2400057/Documents/my_studies/software developement/projects/JAMPA/src/Homepage.css'
import { Header } from './Home/Header'
import { Sidebar } from './Home/Sidebar'
import { HomePageMain } from './component/homepagemain/HomePageMain'
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