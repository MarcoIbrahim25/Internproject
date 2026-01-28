import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function NavBar() {
  const { theme, toggleTheme } = useTheme();

  const navClass =
    theme === "dark"
      ? "bg-slate-900 text-white border-slate-700"
      : "bg-white text-slate-900 border-slate-300";

  return (
    <nav className={`${navClass} border-b shadow-sm`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-wide">My-App</h1>

        <div className="flex items-center gap-8 text-sm font-medium">
          <Link to="/" className="hover:text-blue-600 transition">
            Home
          </Link>

          <Link to="/about" className="hover:text-blue-600 transition">
            About
          </Link>

          <Link to="/contact" className="hover:text-blue-600 transition">
            Contact
          </Link>

          <button
            onClick={toggleTheme}
            className="px-3 py-1 rounded-full border hover:bg-slate-100 dark:hover:bg-slate-800 transition text-xs"
          >
            {theme === "light" ? "Dark" : "Light"}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
