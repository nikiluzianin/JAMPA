'use strict'
import './App.css'
import Header from './viewlayout/Header/Header'
import SideSection from './viewlayout/SideSection/SideSection'
import PlaylistLayout from './viewlayout/PlaylistLayout/Playlist'
import Footer from './viewlayout/Footer/Footer'

// import { useState } from 'react'
// import { searchSpotify } from '../../Playlists/Playlists';


function App() {
 

  return (
    <>
    <div className='app-container'>

      <div className='header'><Header/></div>

        {/* SEARCH BAR 
        <div className='search-bar'>
            <input type="text" placeholder='song,etc' value={input} onChange={(e) => setInput(e.target.value)}/>
            <button>search</button>
        </div>*/}

        <div className='main-container'>
          <div className='section-left'><SideSection/></div>
          <div className='section-right'><PlaylistLayout/></div>
        </div>

        <div className='footer'><Footer/></div>

    </div>
    </>
  )
}

export default App
