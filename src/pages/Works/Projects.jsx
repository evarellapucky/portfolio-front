import { useEffect, useState } from "react";

import { Link } from 'react-router-dom';


export default function Projects() {

  const [projects, setProjects] = useState(null);

  useEffect(() => {
    fetch('http://localhost:1337/api/projects')
      .then((response) => response.json())
      .then((result) => setProjects(result.data))
      .catch((error) => console.error('Error fetching projects:', error));
  }, []);

  return (
    <>
      <h1>Mes projets</h1>
      <div>
        {projects == null ? (
          <p>Loading...</p>
        ) : (
          projects.map((project) => (
            <div key={project.id}>
              <h2>{project.attributes.name}</h2>
              <p>{project.attributes.release}</p>
              <p>{project.attributes.description}</p>
              <Link to={`/works/projects/${project.attributes.slug}`}>Voir plus de détails</Link>
           </div>
          ))
        )}
      </div>
    </>
  );
}

