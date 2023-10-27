
export default function Post({ post }) {
    return (
        <div>
            <p>Name: {post.title}</p>
            <p>Price: {post.price}</p>
            <p>Description: {post.description}</p>
        </div>
    );
}