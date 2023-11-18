import GitHubProjects from '../Components/GitHubProjects';
import styled from 'styled-components';

const FeaturedprojectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  text-align: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    height: 796px;
    padding: 0.5rem;
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    height: 400px;
    padding: 0.5rem;
  }
  `

const Body = styled.div`
  display: flex;
  font-family: 'Montserrat', sans-serif;
  align-self: center;
  font-weight: 400;
  color: #000000;
  `

const FeaturedProjects = () => {
  return (
    <FeaturedprojectsContainer>
        <Body>
          <GitHubProjects />
       </Body>
    </FeaturedprojectsContainer>
  );
};

export default FeaturedProjects;