import React, { useState, useEffect } from 'react';
import PostList from './PostList/PostList';
import axios from 'axios';

export default function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
    .get("http://localhost:4000/posts")
    .then(({data})=>{
      setPosts(data);
    })
    .catch((err)=>{
      alert("erro: "+err.response.status);
    });
  }, []);

  return (
    <PostList name="Daily stories" posts={posts} />
  );
}
