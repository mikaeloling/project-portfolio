import { useEffect } from 'react';
import styled from 'styled-components';
import { useState } from 'react';


const Githubcontainer = styled.div`
  display: grid;
  height: auto;
  background-color: #ffffff;
  grid-template-columns: 1fr;
  margin: 280px 128px 280px 128px;
  


  text-align: center;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    height: 796px;
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    height: 400px;
  }
`;

const GithubBox = styled.div`
  display: flex;
  flex-direction: row;
  height: 280px;
  width: 820px;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 255, 255);
  text-align: center;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    height: 796px;
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    height: 400px;
  }
`;

const Title = styled.div`
  display: flex;
  font-family: 'Montserrat', sans-serif;
  align-self: center;
  font-size: 2rem;
  font-weight: 600;
  color: #000000;
`;

const GithubImage = styled.div`
  width: 280px;
  height: 280px;
  border-radius: 2%
`;

const DescriptionBox = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  color: #000000;
  width: 500px;
`;

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
  <Githubcontainer>
  <Title>
    GitHub Projects
  </Title>
  {githubProjects.map((project) => (
    <div key={project.id}>
      <GithubBox>
        <GithubImage>
          <img src={project.owner.avatar_url} alt="avatar" />
        </GithubImage>
        <DescriptionBox>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <a href={project.html_url}>GitHub Repository</a>
          <a href={project.README}>Netlify</a>
          <p>Language: {project.language}</p>

        </DescriptionBox>
      </GithubBox>
    </div>
  ))}
</Githubcontainer>
  );
}

export default GitHubProjects;
