import { Link } from "react-router-dom";

export default function NavBar() {
    return (
    <nav>
        <h3>{"Stranger's Things"}</h3>
        <p><Link to="/posts">Posts</Link></p>
    </nav>
    );
}
