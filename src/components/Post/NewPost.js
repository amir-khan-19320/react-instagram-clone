import React, { useState } from "react";
import axios from "../../api/axios";

const NewPost = ({ onPostCreated }) => {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return;
    const formData = new FormData();
    formData.append("caption", caption);
    formData.append("image", image);
    try {
      const res = await axios.post("/posts", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      onPostCreated(res.data);
      setCaption("");
      setImage(null);
    } catch {
      // handle error
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 24 }}>
      <input type="file" accept="image/*" onChange={e => setImage(e.target.files[0])} required />
      <input
        value={caption}
        onChange={e => setCaption(e.target.value)}
        placeholder="Caption"
        style={{ marginLeft: 8, marginRight: 8, width: 200 }}
      />
      <button type="submit">Post</button>
    </form>
  );
};

export default NewPost;