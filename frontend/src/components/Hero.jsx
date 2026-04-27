import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthDrawer from "../components/AuthDrawer";
import {Link} from "react-router-dom";
function Hero() {
  const navigate = useNavigate();
  const [openAuth, setOpenAuth] = useState(false);
  const handleStart = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setOpenAuth(true);
    } else {
      navigate("/workout");
    }
  };
    return (
      <>
      <section className="hero">
        <h1>Achieve Your Dream Fitness Goal With FitBuddy</h1>
        <p>
          Plan workouts, track your progress, and get personalized plans — all in one place.
        </p>
        <button className="btn hero-primary" onClick={handleStart}>
          Start Now
        </button>
      </section>
      <AuthDrawer open={openAuth} setOpen={setOpenAuth} />
      </>
    );
  }
  
  export default Hero;