import { useState, useEffect } from "react";
import Showdown from "showdown";
import { useParams, Link } from "react-router-dom"; 


export default function ProjectDetail () {
  const {slug} = useParams();
  const [projectDetail, setProjectDetail] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:1337/api/projects?filters[slug]=${slug}`) // Fetch the project data using the slug
      .then((response) => response.json())
      
      .then((result) => { console.log(result.data); 
        setProjectDetail(result.data[0])})
      
      .catch((error) => console.error('Error fetching project details:', error));
  }, [slug]);

  return (
    <>
    <h1>Détail du projet</h1>
    <Link to="/works/projects">Retour</Link>
      {projectDetail === null ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>{projectDetail.attributes.name}</h2>
          <p>{projectDetail.attributes.release}</p>
          <p>{projectDetail.attributes.description}</p>
          {projectDetail.attributes.content && (
            <div dangerouslySetInnerHTML={{ __html: new Showdown.Converter().makeHtml(projectDetail.attributes.content) }} /> 
           )} 
        </div>
      )}
    </>
  )
}