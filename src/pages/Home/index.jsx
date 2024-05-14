import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="jumbotron jumbotron-fluid m-4">
        <div className="container">
          <h1 className="display-4">Hello, I am Alexia</h1>
          <h3 className="display-6">Bienvenue sur mon portfolio</h3>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
          <p>Envie de me contacter ?</p>
          <p className="lead">
          <Link to="/Contact" className="btn btn-primary" type="button">Contact</Link>
          </p>
        </div>
      </div>

      <div className="area" >
            <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
  </>
)}

export default Home;

