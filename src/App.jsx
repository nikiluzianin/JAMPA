'use strict'

import './App.css'
import { useState, useEffect } from 'react'
import { RouterProvider, Routes, useNavigate, Route } from 'react-router-dom'
import { router } from "./routes/appRoute.jsx"
import { getAccessToken, login, checkAccessToken } from './AuthTokenApi/AuthTokenApi.js'
import InitPlayerTest from './InitPlayerTest.jsx'
import LoginScreen from './LoginScreen/LoginScreen2.jsx'
import TestModal from './TestModal.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import Root from './pages/Root.jsx'


// getAccessToken();

function App() {

  // const [token, setToken] = useState('1');
  const [loggedIn, setLoggedIn] = useState(window.location.search);

  const navigate = useNavigate();

  // manages if user is logged in or not

  useEffect(() => {
    const hash = window.location.search;
    if (hash) {
      setLoggedIn(true);
      // setToken(checkAccessToken());
    }
    navigate('/login');
  }, []);

  useEffect(() => {
    if (loggedIn) {
      navigate('/home');
    }
    console.log("logged in effect");
  }, [loggedIn])

  const loginAction = () => {
    login();
  }

  return (
    /*<RouterProvider router={router1} future={{
      v7_startTransition: true,
    }} />*/
    <Routes>
      <Route path='/' element={<Root />}>
        <Route path='/home' element={<TestModal />} />
        <Route path='/initPlayer' element={<InitPlayerTest />} />
        <Route path="/*" element={<ErrorPage />} />
      </Route>
      <Route path='/login' element={<LoginScreen click={loginAction} />} />
    </Routes>
  )
}

export default App
