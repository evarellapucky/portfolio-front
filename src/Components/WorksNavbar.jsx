import { Link } from "react-router-dom";

const WorksNavbar = () => {
  return (
    <div className="works--navbar mt-5 d-flex justify-content-around">
      <p><Link to="/works/exercices">Exercices</Link></p>
      <p><Link to="/works/casestudies">Etudes de cas</Link></p>
      <p><Link to="/works/projects">Projets</Link></p>
    </div>
  )
}

export default WorksNavbar