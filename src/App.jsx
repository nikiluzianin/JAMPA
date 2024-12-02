'use strict'

import './App.css'
import { useState, useEffect } from 'react'
import { RouterProvider, Routes, useNavigate, Route } from 'react-router-dom'
import { router } from "./routes/appRoute.jsx"
import { getAccessToken, login, checkAccessToken } from './AuthTokenApi/AuthTokenApi.js'
import InitPlayerTest from './InitPlayerTest.jsx'
import LoginScreen from './LoginScreen/LoginScreen2.jsx'




getAccessToken();

function App() {

  // const [token, setToken] = useState('1');
  const [loggedIn, setLoggedIn] = useState(window.location.search);

  const navigate = useNavigate();

  // manages if user is logged in or not

  useEffect(() => {
    const hash = window.location.search;
    if (hash) {
      console.log(typeof (loggedIn));
      setLoggedIn(true);
      // setToken(checkAccessToken());
    }
    navigate('/login');
  }, []);

  const loginAction = () => {
    login();
  }

  useEffect(() => {
    if (loggedIn) {
      navigate('/home');
    }
  }, [loggedIn])

  // console.log("important " + token);




  /*const toggleLoggedIn = () => {
    setLoggedIn(true);
  }*/

  // const router1 = router(loggedIn, loginAction);

  return (
    /*<RouterProvider router={router1} future={{
      v7_startTransition: true,
    }} />*/
    <Routes>
      <Route path='/home' element={<InitPlayerTest />} />
      <Route path='/login' element={<LoginScreen click={loginAction} />} />
    </Routes>
  )
}

export default App
