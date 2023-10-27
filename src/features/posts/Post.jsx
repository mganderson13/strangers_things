import { Link } from "react-router-dom";

export default function Post({ post }) {
    return (
        <div>
            <p>Name: {post.title}</p>
            <p>Price: {post.price}</p>
            <p>Description: {post.description}</p>
            <Link to={`/posts/${post._id}`}>See Details</Link>
        </div>
    );
}