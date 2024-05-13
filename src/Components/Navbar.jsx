import { Link } from "react-router-dom";
import { useThemeUpdate } from "../ThemeContext";

const Navbar = () => {
      // const darkTheme = useTheme()
      const toggleTheme = useThemeUpdate()
      
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Works">Works</Link>
      <Link to="/Contact">Contact</Link>
      <button onClick={toggleTheme}>changer le thème</button>
    </nav>
  )
}

export default Navbar;