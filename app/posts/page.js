"use client";

import { useState, useEffect } from "react";
import PostCard from "./PostCard";

export default function Page() {
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        async function getPosts() {
            const url = "https://jsonplaceholder.typicode.com/posts";

            const response = await fetch(url);
            const data = await response.json();

            setPosts(data);
        }

        getPosts();
    }, []);

    return (
        <div>
            <h1>Posts:</h1>
            <div>
                {posts.map((post) => 
                    <div key={post.id}>
                        <PostCard key={post.id} userId={post.userId} title={post.title} body={post.body}/>
                        <a href={`./posts/${post.id}`}>Go to post</a>
                    </div>)
                }
            </div>
        </div>
    )
}