import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import Post from "../Post/Post";
import NewPost from "../Post/NewPost";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Example: fetch posts from backend
    axios.get("/posts").then(res => setPosts(res.data)).catch(() => {});
  }, []);

  return (
    <div style={{ maxWidth: 600, margin: "0 auto" }}>
      <NewPost onPostCreated={post => setPosts([post, ...posts])} />
      <div>
        {posts.map(post => <Post key={post._id} post={post} />)}
      </div>
    </div>
  );
};

export default Feed;