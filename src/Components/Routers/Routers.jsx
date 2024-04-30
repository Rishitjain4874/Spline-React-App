import { Route, Routes } from "react-router-dom"
import Navbar from "../header/Navbar"
import Home from "../Home/Home"
import About from "../About/About"

function Routers() {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
    </div>
  )
}

export default Routers
