'use strict'

import './App.css'

import NavigationTest from './NavigationTest.jsx'
import InitPlayerTest from './InitPlayerTest.jsx'
import TestModal from './TestModal.jsx'




function App() {



  return (
    <>
      <div>
        {playerScript}
        {player}
        <button className="button1" onClick={clickHandler1}>get track</button>
        <button className="button2" onClick={clickHandler2}>pause playing</button>
        <button className="button3" onClick={clickHandler3}>resume playing</button>
        <button className="button4" onClick={clickHandler4}>start playing my playlist</button>

      </div>

      <div>
        <TestModal />
      </div>

    </>
  )
}

export default App
