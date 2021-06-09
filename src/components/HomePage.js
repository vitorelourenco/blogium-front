import React, { useState, useEffect } from 'react';
import PostList from './PostList/PostList';
import axios from 'axios';

export default function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts([{
      id: 1,
      title: 'Hello World',
      coverUrl: 'https://miro.medium.com/max/1024/1*OohqW5DGh9CQS4hLY5FXzA.png',
      contentPreview: 'Esta é a estrutura de um post esperado pelo front-end',
      content: 'Este é o conteúdo do post, o que realmente vai aparecer na página do post...',
      commentCount: 2
    }]);
  }, []);

  return (
    <PostList name="Daily stories" posts={posts} />
  );
}
