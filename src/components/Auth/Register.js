import React, { useState } from "react";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    setError("");
    try {
      await axios.post("/auth/register", { username, password });
      navigate("/login");
    } catch {
      setError("Registration failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 320, margin: "40px auto" }}>
      <h2>Register</h2>
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
      <button type="submit">Register</button>
      <div style={{ color: "red", marginTop: 8 }}>{error}</div>
    </form>
  );
};

export default Register;