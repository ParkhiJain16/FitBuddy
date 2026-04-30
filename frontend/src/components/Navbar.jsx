import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AuthDrawer from "./AuthDrawer.jsx";

function Navbar() {
  const [authOpen, setAuthOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const token = localStorage.getItem("token");

  const links = [
    { to: "/", label: "About" },
    { to: "/workout", label: "Workout" },
    { to: "/my-plan", label: "Exercise", protected: true },
    { to: "/ai", label: "AI ChatBot" },
  ];

  const handleNavClick = (link, e) => {
    if (link.protected && !token) {
      e.preventDefault();
      setAuthOpen(true);
      setMenuOpen(false);
    }
  };

  // 🔥 LOGOUT FUNCTION
  const handleLogout = () => {
    localStorage.removeItem("token");

    // optional: clear cache
    sessionStorage.clear();

    window.location.reload(); // simplest way to refresh UI
  };

  return (
    <>
      <nav className="navbar">
        {/* Left */}
        <div className="nav-title">🏋️ FitBuddy</div>

        {/* Desktop Links */}
        <div className="nav-links">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={(e) => handleNavClick(link, e)}
              className={`nav-link ${
                location.pathname === link.to ? "active" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right */}
        <div className="nav-right">
          {!token ? (
            <button
              className="btn-primary"
              onClick={() => setAuthOpen(true)}
            >
              Sign In
            </button>
          ) : (
            <button
              className="btn-primary"
              onClick={handleLogout}
            >
              Logout
            </button>
          )}

          <button
            className="hamburger"
            onClick={() => setMenuOpen(true)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <>
          <div className="mobile-menu">
            <button
              className="mobile-menu-close"
              onClick={() => setMenuOpen(false)}
            >
              ✕
            </button>

            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={(e) => handleNavClick(link, e)}
                className={`mobile-menu-link ${
                  location.pathname === link.to ? "active" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}

            {!token ? (
              <button
                className="submit-btn"
                style={{ marginTop: "20px" }}
                onClick={() => {
                  setMenuOpen(false);
                  setAuthOpen(true);
                }}
              >
                Sign In
              </button>
            ) : (
              <button
                className="submit-btn"
                style={{ marginTop: "20px" }}
                onClick={handleLogout}
              >
                Logout
              </button>
            )}
          </div>

          <div
            className="overlay"
            onClick={() => setMenuOpen(false)}
          />
        </>
      )}

      <AuthDrawer open={authOpen} setOpen={setAuthOpen} />
    </>
  );
}

export default Navbar;