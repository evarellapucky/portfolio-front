import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Works">Works</Link>
      <Link to="/Contact">Contact</Link>
    </nav>
  )
}

export default Navbar;