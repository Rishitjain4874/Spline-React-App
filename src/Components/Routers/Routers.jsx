import { Route, Routes } from "react-router-dom"
import Navbar from "../header/Navbar"
import Home from "../Home/Home"
import About from "../About/About"
import Contact from "../Contact/Contact"

function Routers() {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} /> 
        </Routes>
    </div>
  )
}

export default Routers
