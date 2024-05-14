import { Link } from "react-router-dom";
import { useThemeUpdate } from "../ThemeContext";
import theme from "../assets/images/premier-quart.png"
import home from "../assets/images/accueil.png"

const Navbar = () => {
      // const darkTheme = useTheme()
      const toggleTheme = useThemeUpdate()
      
  return (
  <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
    <Link to="/" className="btn navbar-brand">
      <img src={home} alt="icône d'accueil"/>
    </Link>
  <div className="pages__links collapse navbar-collapse justify-content-around">
   
  <ul className="navbar-nav">
  <li className="nav-item">
          <Link to="/" className="nav-link link1">Home</Link>
        </li>
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
    <button type="button" className="btn" onClick={toggleTheme}>
      <img src={theme} alt="changement de thème"/>
    </button>
    </div>
    </nav> 

  )
}


export default Navbar;

