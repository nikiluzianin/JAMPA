'use strict'

import './App.css'
import './AuthTokenApi/AuthTokenApi.js'
import { getAccessToken } from './AuthTokenApi/AuthTokenApi.js'
import './ApiFunctions/ApiFunctions.js'
import { fetchProfile } from './ApiFunctions/ApiFunctions.js'
import { getTrack } from './ApiFunctions/ApiFunctions.js'


function App() {

  console.log(getAccessToken());
  fetchProfile(getAccessToken()).then(console.log);
  getTrack(getAccessToken(), "11dFghVXANMlKmJXsNCbNl").then(console.log);


  return (
    <>
      <div>

        asdasd
      </div>
    </>
  )
}

export default App
