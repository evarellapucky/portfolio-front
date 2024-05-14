import Pizzacat from '../../assets/images/pizza-cat.jpg';
import { Link } from 'react-router-dom';

const About = () => { 
return (
<section className="section about-section mt-5" id="about">
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
</section>

)
}


export default About;
