// import { useState } from "react";
// import { Link } from "react-router-dom";
// import AuthDrawer from "./AuthDrawer.jsx"
// function Navbar() {
//   const [open, setOpen] = useState(false)
//   return (
//     <>
//     <nav className="navbar">
//       <div className="nav-title">🏋️ FitBuddy</div>

//       <div className="nav-links">
//         {/* <a href="#" className="nav-link active">About</a> */}
//         <Link to="/" className="nav-link active">About</Link>
//         {/* <a href="#" className="nav-link">Workout</a> */}
//         <Link to="/workout" className="nav-link">Workout</Link>
//         {/* <a href="#" className="nav-link">Exercise</a> */}
//         <Link to="/my-plan" className="nav-link">Exercise</Link>
//         <Link to="/ai" className="nav-link">AI-ChatBot</Link>
//       </div>

//       <button className="btn-primary" onClick={()=>setOpen(true)}>Sign In</button>
//     </nav>
//     <AuthDrawer open = {open} setOpen = {setOpen} />
//     </>
//   );
// }

// export default Navbar;
// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import AuthDrawer from "./AuthDrawer.jsx";

// function Navbar() {
//   const [authOpen, setAuthOpen] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const location = useLocation();

//   const links = [
//     { to: "/", label: "About" },
//     { to: "/workout", label: "Workout" },
//     { to: "/my-plan", label: "Exercise" },
//     { to: "/ai", label: "AI ChatBot" },
//   ];

//   return (
//     <>
//       <nav className="navbar">
//         {/* Title */}
//         <div className="nav-title">🏋️ FitBuddy</div>

//         {/* Desktop links — hidden on mobile via CSS */}
//         <div className="nav-links">
//           {links.map((link) => (
//             <Link
//               key={link.to}
//               to={link.to}
//               className={`nav-link ${location.pathname === link.to ? "active" : ""}`}
//             >
//               {link.label}
//             </Link>
//           ))}
//         </div>

//         {/* Sign In button */}
//         <button className="btn-primary" onClick={() => setAuthOpen(true)}>
//           Sign In
//         </button>

//         {/* Hamburger — only visible on mobile via CSS */}
//         <button
//           className="hamburger"
//           onClick={() => setMenuOpen(true)}
//           aria-label="Open menu"
//         >
//           <span />
//           <span />
//           <span />
//         </button>
//       </nav>

//       {/* Mobile slide-down menu */}
//       {menuOpen && (
//         <div className="mobile-menu">
//           <button
//             className="mobile-menu-close"
//             onClick={() => setMenuOpen(false)}
//             aria-label="Close menu"
//           >
//             ✕
//           </button>
//           {links.map((link) => (
//             <Link
//               key={link.to}
//               to={link.to}
//               className={`mobile-menu-link ${location.pathname === link.to ? "active" : ""}`}
//               onClick={() => setMenuOpen(false)}
//             >
//               {link.label}
//             </Link>
//           ))}
//           <button
//             className="submit-btn"
//             style={{ marginTop: "20px" }}
//             onClick={() => { setMenuOpen(false); setAuthOpen(true); }}
//           >
//             Sign In
//           </button>
//         </div>
//       )}

//       {/* Overlay behind mobile menu */}
//       {menuOpen && (
//         <div className="overlay" onClick={() => setMenuOpen(false)} />
//       )}

//       <AuthDrawer open={authOpen} setOpen={setAuthOpen} />
//     </>
//   );
// }

// export default Navbar;

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AuthDrawer from "./AuthDrawer.jsx";

function Navbar() {
  const [authOpen, setAuthOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/", label: "About" },
    { to: "/workout", label: "Workout" },
    { to: "/my-plan", label: "Exercise" },
    { to: "/ai", label: "AI ChatBot" },
  ];

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
          <button
            className="btn-primary"
            onClick={() => setAuthOpen(true)}
          >
            Sign In
          </button>

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
                className={`mobile-menu-link ${
                  location.pathname === link.to ? "active" : ""
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

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