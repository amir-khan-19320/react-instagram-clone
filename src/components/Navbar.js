import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav style={{ padding: 16, borderBottom: "1px solid #ccc", marginBottom: 24 }}>
      <Link to="/" style={{ marginRight: 16 }}>Feed</Link>
      {user ? (
        <>  
          <Link to={`/profile/${user.username}`} style={{ marginRight: 16 }}>Profile</Link>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>  
          <Link to="/login" style={{ marginRight: 8 }}>Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;