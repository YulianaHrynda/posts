'use client';

import { useParams } from 'next/navigation'
import { useState, useEffect } from "react";
import PostCard from '../PostCard';

export default function Page() {
  const [post, setPost] = useState({});
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    async function getPost() {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`

        const response = await fetch(url);
        const data = await response.json();
        console.log(data)

        setPost(data);
    }

    getPost();
  }, [])

  return (
    <div>
        <PostCard userId={post.userId} title={post.title} body={post.body}/>
    </div>
  )
} 
