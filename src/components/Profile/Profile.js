import React from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { username } = useParams();
  // You can add useEffect to fetch user data based on username
  return (
    <div style={{ maxWidth: 600, margin: "40px auto" }}>
      <h2>Profile: @{username}</h2>
      {/* Show user's posts or profile info here */}
      <div>Coming soon...</div>
    </div>
  );
};

export default Profile;