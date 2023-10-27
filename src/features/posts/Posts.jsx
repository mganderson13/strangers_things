import { useState, useEffect } from "react";
import Post from "./post";

export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(()=> {
        const fetchPosts = async () => {
            const API_URL = `https://strangers-things.herokuapp.com/api/2309-FSA-ET-WEB-FT-SF`;
        const response = await fetch(`${API_URL}/posts`);
        const json = await response.json();

        setPosts(json.data.posts);
        };
        fetchPosts();
    }, []);

    return (
        <div>
            {posts.map((post) => (
                <Post key={post._id} post={post} />
            ))}
        </div>
    );
}