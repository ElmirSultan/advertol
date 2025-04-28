import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/home/Home';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import CursorTrail from './components/CursorTrail'
import OurWorks from './pages/OurWorks'
import Services from './pages/Services'

function App() {

  const [active, setActive] = useState(window.location.href.split("/").pop());

  console.log(active);
  console.log(window.location.href);
  
  

  return (
   <main>
      <BrowserRouter>
      <CursorTrail />
      <Header active={active} setActive={setActive} />
      <Routes>
        <Route path={"/"} element={<Home /> } />
        <Route path={"/works"} element={<OurWorks /> } />
        <Route path={"/services"} element={<Services /> } />
      </Routes>
      <Footer active={active} setActive={setActive} />
      </BrowserRouter>
   </main>
  )
}

export default App
