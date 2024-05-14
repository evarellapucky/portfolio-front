import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


export default function Projects() {

  const [projects, setProjects] = useState(null);

  useEffect(() => {
    fetch('http://localhost:1337/api/projects?populate=*')
      .then((response) => response.json())
      .then((result) => {
        console.log(result.data); // Log the fetched data
        setProjects(result.data); // Set the fetched data to state
      })
      .catch((error) => console.error('Error fetching projects:', error));
  }, []);

// http://localhost:1337/api/projects?populate=* => url pour trouver les images

  return (
    <>
      <h1>Mes projets</h1>
      <div className="row">
      
        {/* <div className="card"> */}
        {projects == null ? (
          <p>Loading...</p>
        ) : (
          projects.map((project) => (
            <div className="col-4"  key={project.id}>
            <div className="card">
              <img className="projects--img card-img-top" src={`http://localhost:1337${project.attributes.picture.data.attributes.url}`} alt={project.attributes.name} />
              <div className="card-body">
              <h2 className="card-title">{project.attributes.name}</h2>
              <p className="card-text">{project.attributes.release}</p>
              <p className="card-texte">{project.attributes.description}</p>
              <Link className="btn btn-primary" to={`/works/projects/${project.attributes.slug}`}>Voir plus de détails</Link>
              </div>
              </div>
            </div> 
          ))
        )}
        </div>
    
      {/* </div> */}
    </>
  );
}

