import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import InitPlayerTest from './InitPlayerTest.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <InitPlayerTest /> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
