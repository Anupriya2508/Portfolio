import React, { forwardRef } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from "react-router-dom";

const projectsData = [
  {
    id: 1,
    title: 'Clean India Initiative Website',
    description: 'The "Clean India Initiative" website is a community-driven platform aimed at addressing and combatting pollution in our streets. With a user-friendly interface, the platform empowers users to actively participate in the cleanliness drive by reporting polluted areas and contributing to the overall improvement of their surroundings.',
    imageUrl: require('../images/cleanIndia.png'),
    demoLink: 'https://clean-india-control-pollution.000webhostapp.com/start.php',
  },
  {
    id: 2,
    title: 'Amazon Frontend Clone',
    description: "The Amazon Frontend Clone is a meticulously crafted web application that mirrors the renowned Amazon e-commerce platform. With a user-friendly interface and seamless navigation, it replicates the amazon website. This project serves as a showcase of frontend development skills, ensuring a responsive design for optimal user experience across devices. ",
    imageUrl: require('../images/amazon.png'),
    demoLink: 'https://delicate-beijinho-7038c9.netlify.app/',
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Description of Project 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: 'image_url_3',
    demoLink: 'demo_link_3',
  },
  // Add more projects as needed
];

const ProjectCard = ({ project }) => (
  <div className="project-card">
    <img className="project-image" src={project.imageUrl} alt={project.title} />
    <div className="project-details">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-links">
        {project.demoLink && (
          <Link to={`/projects/${project.title}`} className="project-link">
            Know More!
          </Link>
        )}
      </div>
    </div>
  </div>
);

const Projects = forwardRef((props, ref) => {
  return (
    <div className="proj" ref={ref}>
      <h2 className="tit">Projects</h2>
      <div className="project-container">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
});

export default Projects;
