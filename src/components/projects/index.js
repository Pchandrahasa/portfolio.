import React from 'react';
import './index.css';
import hotel from  '../../assets/hotel.jpeg'
import jobsportel from  '../../assets/jobsportel.jpeg'
import springboot from  '../../assets/springboot.jpeg'
import nxttrendz from  '../../assets/nxttrendz.jpeg'

const Projects = () => {
  const projects = [
    {
      title: 'Ecommerce Website',
      image:`${nxttrendz}`,
      technologies: 'HTML, CSS, REACT, JAVASCRIPT',
      description:
        'Our dynamic ecommerce platform leverages the power of HTML, CSS, React, and JavaScript to deliver an engaging and seamless shopping experience. With a sleek and modern design, users can effortlessly browse products and enjoy intuitive navigation. From responsive layouts to interactive features, our project embodies innovation and user-centricity. Dive into the future of online shopping with our cutting-edge web solution.',
      url: 'https://chandrahasaecom.ccbp.tech/login',
    },
    {
      title: 'Jobs Portal',
      image:`${jobsportel}`,
      technologies: 'HTML, CSS, REACT, JAVASCRIPT',
      description:
        'Built a job portal with intuitive navigation, advanced search, and tailored alerts for dream job recommendations. Transformed career journeys by simplifying the job search process and connecting users with top employers.',
      url: 'https://jobsportel.ccbp.tech',
    },
    {
      title: 'Products Database',
      image:`${springboot}`,
      technologies: 'SPRING BOOT, DATABASE, JAVA',
      description:
        'This project is a Spring Boot application for managing product data, offering comprehensive CRUD (Create, Read, Update, Delete) operations. It features a robust backend architecture, using JPA for database interactions and implementing service and repository layers for business logic and data access.',
      url: 'https://github.com/Pchandrahasa/products-data',
    },
    {
      title: 'Hotel Website',
      image:`${hotel}`,
      technologies: 'HTML, CSS',
      description:
        'Discover our HTML/CSS project, a dynamic website blending creativity and functionality. With clean code and responsive design, this project showcases seamless navigation and captivating visuals. Explore interactive features and modern layouts, demonstrating expertise in frontend development.',
      url: 'https://hotelwebabc.ccbp.tech/',
    },
  ];

  return (
    <section id="projects">
    <div className="projects-container">
      {projects.map((project, index) => (
        <div key={index} className="project">
          
          <div className='project-card'>
            <div>
              <h2>{project.title}</h2>
              <p>Technologies: {project.technologies}</p>
              <p>{project.description}</p>
            </div>
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="view-project-btn">
              <span>View Project</span>
              <i className="bi bi-arrow-right"></i> 
            </a>
          </div>
          <img src={project.image} className='project-img'/>

        </div>
      ))}
    </div>
    </section>
  );
};

export default Projects;
