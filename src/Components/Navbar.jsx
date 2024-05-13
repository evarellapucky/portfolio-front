import { Link } from "react-router-dom";
import { useThemeUpdate } from "../ThemeContext";

const Navbar = () => {
      // const darkTheme = useTheme()
      const toggleTheme = useThemeUpdate()
      
  return (
  <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
    <Link to="/" className="navbar-brand">Alexia Scherer</Link>
  <div className="pages__links collapse navbar-collapse justify-content-around">
   
  <ul className="navbar-nav">
    <li className="nav-item">
          <Link to="/About" className="nav-link link1">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/Works" className="nav-link link1">Projects</Link>
        </li>
     
        <li className="nav-item">
          <Link to="/Contact" className="nav-link link1">Contact</Link>
        </li>
      </ul>
      </div>
    <button type="button" className="btn btn-primary" onClick={toggleTheme}>changer le thème</button>
    </div>
    </nav> 

  )
}


export default Navbar;

