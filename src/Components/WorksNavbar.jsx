import { Link } from "react-router-dom";

const WorksNavbar = () => {
  return (
    <div className="works--navbar mt-5 d-flex justify-content-around">
    <div className="nav-link-container">
      <Link className="btn btn-link" to="/works/exercices">
        <span className="nav-link-text">Exercices</span>
      </Link>
    </div>
    <div className="nav-link-container">
      <Link className="btn btn-link" to="/works/casestudies">
        <span className="nav-link-text">Etudes de cas</span>
      </Link>
    </div>
    <div className="nav-link-container">
      <Link className="btn btn-link" to="/works/projects">
        <span className="nav-link-text">Projets</span>
      </Link>
    </div>
  </div>
  
  )
}

export default WorksNavbar