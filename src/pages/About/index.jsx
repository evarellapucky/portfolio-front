// import Pizzacat from '../../assets/images/pizza-cat.jpg';
// import { Link } from 'react-router-dom';
import SectionTitle from "../../Components/SectionTitle";
import Pizzacat from "../../assets/images/pizza-cat.jpg";
import "bootstrap-icons/font/bootstrap-icons.css";
import Ruby from "../../assets/images/ruby.png";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container about-me">
        <SectionTitle title="About" subtitle="Learn more about me" />
        <div className="row">
          <div className="col-lg-4">
            <img src={Pizzacat} alt="photo de profil" className="image-fluid" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content">
            <h3>UI/UX &amp; Website designer</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              saepe laboriosam perspiciatis minus sint. Quis, distinctio tenetur
              esse labore sit cum minus voluptatibus eveniet ipsa laudantium
              fuga! Accusantium, sunt deleniti?
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                  <i className="bi bi-caret-right-fill"></i>
                    <strong>Country:</strong> <span>France</span>
                  </li>
                  <li>
                  <i className="bi bi-caret-right-fill"></i>
                    <strong>Country:</strong> <span>France</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                  <i className="bi bi-caret-right-fill"></i>
                    <strong>Country:</strong> <span>France</span>
                  </li>
                  <li>
                  <i className="bi bi-caret-right-fill"></i>
                    <strong>Country:</strong> <span>France</span>
                  </li>
                </ul>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              velit, nemo quis enim laborum optio praesentium ad iure
              perferendis? Dolorum id molestiae culpa soluta sequi aut vitae.
              Debitis, exercitationem expedita. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Assumenda corporis soluta
              repudiandae maxime fugiat, deleniti, molestias nam iure aliquid ut
              quis! Blanditiis totam, accusamus voluptate assumenda ea dolore ut
              cupiditate? Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Aperiam ducimus officia fugit facere velit asperiores ex ad,
              a iusto dolore cumque dolores animi hic vero praesentium
              laudantium eius recusandae similique.
            </p>
          </div>
        </div>
        {/* <SectionTitle title="Skills" subtitle="WHat I learned" />
        <div className="row skills">
          <div className="col-lg-4">
            <div className="row">
              <div className="skill-box">
              <div className="col-lg-6 img-box">
                <img src={Ruby} alt="" />
              </div>
              <div className="col-lg-6">
                <p>Ruby</p>
              </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>

    /* <section className="section about-section mt-5" id="about">
    <div className="container">
        <div className="row align-items-center justify-content-around flex-row-reverse">
            <div className="col-lg-6">
                <div className="about-text">
                    <h2 className="dark-color">About Me</h2>
                    <h4 className="theme-color">UI / UX Designer &amp; Web Developer</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit maiores tenetur reprehenderit quam quaerat, eum sapiente repellat, tempore placeat non fugiat a exercitationem explicabo voluptatem est vitae optio mollitia numquam.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur voluptate consectetur, doloribus nobis, molestiae dolore voluptates voluptatem totam cum reprehenderit quis vero. Minima alias perspiciatis reiciendis explicabo unde molestias temporibus?</p>
                    <div className="btn-bar">
                        <Link className="px-btn theme" to="/Works">View Works</Link>
                        <Link className="px-btn theme-t" to="">Download CV</Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-5 text-center">
                <div className="about-img">
                    <img src={Pizzacat}/>
                </div>
            </div>
        </div>
    </div>
</section> */
  );
};

export default About;
