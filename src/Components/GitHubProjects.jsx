import React, { useState, useEffect } from 'react';

function GitHubProjects() {
  const [githubProjects, setGitHubProjects] = useState([]);

  useEffect(() => {
    // Fetch data from the GitHub API
    fetch('https://api.github.com/users/mikaeloling/repos')
      .then((response) => response.json())
      .then((data) => setGitHubProjects(data))
      .catch((error) => console.error('Error fetching GitHub data: ', error));
  }, []);

  return (
    <div>
      <h1>My GitHub Projects</h1>
      <ul>
        {githubProjects.map((project) => (
          <li key={project.id}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <a href={project.html_url}>GitHub Repository</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GitHubProjects;
