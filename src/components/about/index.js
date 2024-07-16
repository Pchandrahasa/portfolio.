import './index.css'
import education from '../../assets/education.png';


const About=()=>(
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img src={education} alt="Education icon" className="icon" />
              <h3>Education</h3>
              <p><span>Bachelor of Technology (CSE)</span><br />SRM University of Science and Technology</p>
            </div>
            <div className="details-container">
              <img src={education} alt="Education icon" className="icon" />
              <h3>Education</h3>
              <p><span>Board of Intermediate (MPC)</span><br />Sri Chaitanya Junior College</p>
            </div>
            <div className="details-container">
              <img src={education} alt="Education icon" className="icon" />
              <h3>Education</h3>
              <p><span>Secondary School Certificate (SSC)</span><br />CSR Additya School</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
)

export default About