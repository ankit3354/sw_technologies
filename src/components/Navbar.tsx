import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Navbar.css";
import { toast } from "react-toastify";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user") || "null");

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Logout Sucessfully!");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      {/* Logo */}

      <div className="logo">SW Technologies</div>

      {/* Nav Links */}
      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
        </li>
        <li>
          <Link to="/services" onClick={() => setMenuOpen(false)}>
            Services
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </li>
        {user?.isAdmin && (
          <li>
            <Link to="/admin" onClick={() => setMenuOpen(false)}>
              Admin
            </Link>
          </li>
        )}
        {/* Auth */}
        {user ? (
          <>
            <li className="user-name">Hi, {user.name}</li>

            <li>
              <button className="logout-btn" onClick={logoutHandler}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login" onClick={() => setMenuOpen(false)}>
                Login
              </Link>{" "}
              /{" "}
              <Link to="/register" onClick={() => setMenuOpen(false)}>
                Sign In
              </Link>
            </li>
          </>
        )}
      </ul>

      {/* Hamburger */}

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
