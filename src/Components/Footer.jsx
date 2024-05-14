
import Linkedin from '../assets/images/linkedin.png';
import Github from '../assets/images/github.png'


const Footer = () => {
  return (
  <footer className="text-center">
  {/* Grid container */}
  <div className="container p-3 pb-0 d-flex justify-content-between align-items-center">
    {/* Name */}
    <div>
      © 2024 Copyright:
      <span className="text-body">Alexia Scherer</span>
    </div>
    {/* Section: Social media */}
    <section className="mb-4">
      {/* Linkedin */}
      <a
        data-mdb-ripple-init
        className="btn text-white btn-floating m-1"
        style={{ backgroundColor: "#0082ca" }} // Fix inline style here
        href="https://www.linkedin.com/in/alexiascherer/"
        role="button"
      >
        <img src={Linkedin} style={{ width: '16px', height: '16px' }} />
      </a>
      {/* Github */}
      <a
        data-mdb-ripple-init
        className="btn text-white btn-floating m-1"
        style={{ backgroundColor: "#333333" }} // Fix inline style here
        href="https://github.com/evarellapucky"
        role="button"
      >
        <img src={Github} alt="Github" style={{ width: '16px', height: '16px' }}/>
      </a>
    </section>
    {/* Section: Social media */}
  </div>
  {/* Grid container */}
</footer>
         
  )
}

export default Footer