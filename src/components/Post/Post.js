import React from "react";

const Post = ({ post }) => (
  <div style={{ border: "1px solid #ddd", marginBottom: 24, padding: 16, borderRadius: 8 }}>
    <div style={{ fontWeight: "bold", marginBottom: 8 }}>@{post.username}</div>
    <img src={post.imageUrl} alt="Post" style={{ width: "100%", maxHeight: 400, objectFit: "cover", marginBottom: 8 }} />
    <div>{post.caption}</div>
    <div style={{ marginTop: 8 }}>
      <span role="img" aria-label="like">❤️</span> {post.likes?.length || 0}
    </div>
    {/* Like button, comment feature, etc. can be added here */}
  </div>
);

export default Post;