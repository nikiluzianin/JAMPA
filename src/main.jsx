import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import InitPlayerTest from './InitPlayerTest.jsx'
import 'bootstrap/dist/css/bootstrap.css'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <InitPlayerTest /> */}
    <App />
  </StrictMode>,
)
