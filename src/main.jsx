import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Login from './pages/Login.jsx'
import { BrowserRouter, Routes, Route} from "react-router";
import Home from "./pages/home.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
          </Routes>
      </BrowserRouter>
  </StrictMode>,
)
