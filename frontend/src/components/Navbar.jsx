import { useState } from "react";
import { Link } from "react-router-dom";
import AuthDrawer from "./AuthDrawer.jsx"
function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <>
    <nav className="navbar">
      <div className="nav-title">🏋️ FitBuddy</div>

      <div className="nav-links">
        {/* <a href="#" className="nav-link active">About</a> */}
        <Link to="/" className="nav-link active">About</Link>
        {/* <a href="#" className="nav-link">Workout</a> */}
        <Link to="/workout" className="nav-link">Workout</Link>
        {/* <a href="#" className="nav-link">Exercise</a> */}
        <Link to="/my-plan" className="nav-link">Exercise</Link>
        <Link to="/ai" className="nav-link">AI-ChatBot</Link>
      </div>

      <button className="btn-primary" onClick={()=>setOpen(true)}>Sign In</button>
    </nav>
    <AuthDrawer open = {open} setOpen = {setOpen} />
    </>
  );
}

export default Navbar;