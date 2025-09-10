import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed/Feed";
import Profile from "./components/Profile/Profile";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile/:username" element={<Profile />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;