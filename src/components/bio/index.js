import './index.css'
import chandrahasa from '../../assets/chandrahasa.jpg';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';



const Bio=()=>(
    <section id="profile">
      <div >
        <img src={chandrahasa} alt="Chandrahasa Pabbathi profile" className="profile-pic" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Chandrahasa Pabbathi</h1>
        <p className="role">Fullstack Developer</p>
        <p>I have a passion for frontend development, specializing in HTML, CSS, React, and JavaScript. I deliver seamless user experiences and create innovative web solutions like ecommerce platforms and engaging games. I am seeking to contribute my expertise in design and interactivity to a dynamic team.</p>
        <div className="btn-container">
          <button className="btn btn-color-2">Download CV</button>
          <a href="#contact"><button className="btn btn-color-1">Contact Info</button></a>
        </div>
        <div id="socials-container">
          <a href="https://github.com/Pchandrahasa"><img src={github} alt="My Github profile" className="icon" /></a>
          <a href="https://www.linkedin.com/in/chandrahasa-pabbathi/"><img src={linkedin} alt="My Github profile" className="icon" /></a>
          
        </div>
      </div>
    </section>
)

export default Bio