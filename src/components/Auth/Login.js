import React, { useState, useContext } from "react";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    setError("");
    try {
      const res = await axios.post("/auth/login", { username, password });
      login(res.data);
      navigate("/");
    } catch {
      setError("Invalid credentials");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 320, margin: "40px auto" }}>
      <h2>Login</h2>
      <input
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
        style={{ display: "block", width: "100%", marginBottom: 12 }}
      />
      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        style={{ display: "block", width: "100%", marginBottom: 12 }}
      />
      <button type="submit">Login</button>
      <div style={{ color: "red", marginTop: 8 }}>{error}</div>
    </form>
  );
};

export default Login;