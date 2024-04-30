import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full flex flex-col justify-center item-center h-16 drop-shadow-xl backdrop-blur-sm bg-purple-400">
      <nav className="flex justify-between items-center px-20">
        <h1 className="text-2xl font-sans font-[700] text-zinc-50 drop-shadow-md">
          <Link to="/">Test React App</Link>
        </h1>
        <div>
          <ul className="flex items-center gap-4  text-white font-bold">
            <li>
              <Link to="/" className="nav-link drop-shadow-md">Home</Link>
            </li>
            <li>
              <Link to="/about" className="nav-link drop-shadow-md">About</Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link drop-shadow-md">Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
