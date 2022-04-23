import React, { useState } from 'react';
import Project from "../Project";
//import movie from "./assets/projects/movie.jpg"

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'movie',
      description: 'Movie Review API',
      link: "https://wtriii.github.io/Project-1-Movie-Comparison-Site/",
      repo: "https://github.com/WTRIII/Project-1-Movie-Comparison-Site"
    },
    {
      name: 'doctor',
      description: 'Fullstack',
      link: "https://project2-group8.herokuapp.com/login",
      repo: "https://github.com/samkilpatrick903/Full-Stack-Appointment-App"
    },
    {
      name: 'pho',
      description: 'MERN',
      link: "https://possystem-wee.herokuapp.com/",
      repo: "https://github.com/KalvinN361/POS-SYSTEM_ATTEMPT"
    },
    {
      name: 'fit',
      description: 'Routes',
      link: "https://jalvarez-fitness-tracker.herokuapp.com/",
      repo: "https://github.com/Jalvarez025/Homework-18-Fitness-Tracker"
    },
    {
      name: 'note-taker',
      description: 'Routes',
      link: "https://note-taker-jesse.herokuapp.com/",
      repo: "https://github.com/Jalvarez025/Homework-11"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;