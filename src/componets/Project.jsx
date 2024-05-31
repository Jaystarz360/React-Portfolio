import React from 'react';
import '../css/Project.css'; // Import the CSS file

function ProjectCard(props) {
  return (
    <div>
      <h1>Portfolio</h1>
      {props.projects.map(project => {
        return (
          <div className="card mb-3" key={project.id}>
            <img src={project.img} className="card-img-top" alt={project.alt}></img>
            <div className="card-body">
              <h5>{project.name}</h5>
              <a href={project.repoUrl} className="card-link">Visit the Repo!</a>
             </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectCard;
