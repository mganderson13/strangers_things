import { useParams } from "react-router-dom";
import { useGetPostsQuery } from "./postSlice";

export default function PostDetails() {
    const { id } = useParams()
    const { data: posts } = useGetPostsQuery();

    const post = posts?.find((post)=> post._id === id);

    if(!post) {
        return <p>Post not found</p>;
    }

    return (
        <div>
            <h2>{post.title}</h2>
            <p>Description: {post.description}</p>
            <p>Price: {post.price}</p>
            <p>Location: {post.location}</p>
            <p>Author: {post.author.username}</p>
            <p>Will Deliver: {post.willDeliver ? "Yes" : "No"}</p>
        </div>
    );
}