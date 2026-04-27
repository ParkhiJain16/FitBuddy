import { useState } from "react";
import axios from "axios";
// import { API_URL } from "../config";
import { API_URL } from "../config";

function AuthDrawer({ open, setOpen }) {
  const [mode, setMode] = useState("signin");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let res;

      if (mode === "signin") {
        res = await axios.post(`${API_URL}/api/auth/register`, {
          name,
          email,
          password
        });
      } else {
        res = await axios.post(`${API_URL}/api/auth/login`, {
          email,
          password
        });
      }

      localStorage.setItem("token", res.data.token);

      alert("Success ✅");
      setOpen(false);

    } catch (err) {
      console.error(err.response?.data || err.message);
      alert(err.response?.data?.msg || "Authentication failed");
    }
  };

  return (
    <>
      {open && <div className="overlay" onClick={() => setOpen(false)} />}

      <div className={`drawer ${open ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setOpen(false)}>✕</button>

        <h2>{mode === "signin" ? "Sign Up" : "Login"}</h2>

        <form className="auth-form" onSubmit={handleSubmit}>
          <p className="auth-text">
            {mode === "signin" ? "Already have an account?" : "New user?"}
            <span
              className="link-btn"
              onClick={() => setMode(mode === "signin" ? "login" : "signin")}
            >
              {mode === "signin" ? " Login" : " Sign Up"}
            </span>
          </p>

          {mode === "signin" && (
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="submit-btn">
            {mode === "signin" ? "Sign Up" : "Login"}
          </button>
        </form>
      </div>
    </>
  );
}

export default AuthDrawer;