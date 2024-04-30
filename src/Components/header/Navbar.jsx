import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full flex flex-col justify-center item-center h-16 drop-shadow-xl backdrop-blur-sm bg-purple-400">
      <nav className="flex justify-between items-center px-20">
        <h1 className="text-2xl font-monospace font-bold text-zinc-50">
          <Link to="/">Test React App</Link>
        </h1>
        <div>
          <ul className="flex items-center gap-4  text-yellow-500">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
