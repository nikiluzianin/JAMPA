'use strict'

import './App.css'
import './AuthTokenApi/AuthTokenApi.js'
import { getAccessToken } from './AuthTokenApi/AuthTokenApi.js'
import './ApiFunctions/ApiFunctions.js'
import { fetchProfile } from './ApiFunctions/ApiFunctions.js'
import { getTrack } from './ApiFunctions/ApiFunctions.js'


function App() {


  const clickHandler = () => {
    getTrack(getAccessToken(), "11dFghVXANMlKmJXsNCbNl").then(console.log);
  }

  return (
    <>
      <div>
        <button className="button1" onClick={clickHandler}>do it</button>
        asdasd
      </div>
    </>
  )
}

export default App
