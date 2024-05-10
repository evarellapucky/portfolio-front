import { Link } from "react-router-dom";

const WorksNavbar = () => {
  return (
    <nav>
      <p><Link to="/works/exercices">Exercices</Link></p>
      <p><Link to="/works/casestudies">Etudes de cas</Link></p>
      <p><Link to="/works/projects">Projets</Link></p>
    </nav>
  )
}

export default WorksNavbar