import { useEffect } from 'react';
import styled from 'styled-components';
import { useState } from 'react';


const Githubcontainer = styled.div`
  display: flex;
  height: auto;
  flex-direction: column;
 
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 255, 255);
  
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
  margin-top: 128px;
  margin-bottom: 128px;
  font-family: 'Montserrat-Bold', Helvetica;
  align-self: center;
  font-size: 80px;
  font-weight: 600;
  color: #000000;
`;

const GithubImage = styled.div`
  width: 280px;
  height: 280px;
  background-image: url(${(props) => props.src});
  background-size: cover;
´  border-radius: 2%
`;

const DescriptionBox = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  color: #000000;
  width: 700px;
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
      <GithubImage src={project}>
      <img src={project} alt="avatar" />
    </GithubImage>
        <div>
        <DescriptionBox>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <a href={project.html_url}>GitHub Repository</a>
          <a href={project.README}>Netlify</a>
          <p>Language: {project.language}</p>
          
        </DescriptionBox>
        </div>
      </GithubBox>
    </div>
  ))}
</Githubcontainer>
  );
}

export default GitHubProjects;
