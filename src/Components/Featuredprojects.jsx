import styled from 'styled-components';
import { useState, useEffect } from 'react';
import projectData from '../data.json';
import {LiveDemoButton} from '../Uicomponents/LiveDemoButton'
import {ViewCodeButton} from '../Uicomponents/ViewCodeButton'

const Container = styled.div`
    display: flex;
    flex-direction: column;
   

    @media (max-width: 768px) {
        display: grid;
        grid-template-columns: 1fr;
        
        

}
`

const FeaturedProjectsContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 128px;
    background-color: #ffffff;

   
`;

const Title = styled.div`
    color: #0b24f5;
    font-family: "Montserrat-Bold", Helvetica;
    font-size: 80px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: normal;
    margin-top: 24px;
    position: relative;
    text-align: center;
    width: fit-content;
`;

const Project = styled.div`
    height: 280px;
    position: relative;
    width: 820px;

    &:hover { 
        box-shadow: 0px 0px 0px 1px #0b24f5;
        cursor: pointer;
    }

    @media (max-width: 768px) {
        display: grid;
        grid-template-columns: 1fr;
        padding: 5px 5px;

    

`;

const ProjectImage = styled.img`
    height: 280px;
    left: 0;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 280px;
    border-color: #0B24F5;
    border-style: solid;
    border-width: 10px;
    border-right: none;
    border-top: none;
`;

const Frame = styled.div`
    align-items: center;
    display: inline-flex;
    flex-direction: column;
    gap: 16px;
    left: 320px;
    position: absolute;
    top: 0;
`;

const Header = styled.div`
    color: #000000;
    font-family: "Montserrat-SemiBold", Helvetica;
    font-size: 32px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: normal;
    margin-top: -1px;
    position: relative;
    width: fit-content;
`;

const Text = styled.div`
    color: #000000;
    font-family: "Hind-Regular", Helvetica;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: normal;
    position: relative;
    width: 500px;
`;

const TechStack = styled.div`
    align-items: flex-start;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 4px;
    position: relative;
`;

const TechItem = styled.div`
    align-items: flex-start;
    background-color: #000000;
    display: inline-flex;
    flex: 0 0 auto;
    padding: 2px 6px;
    position: relative;
`;

const TechText = styled.div`
    color: #ffffff;
    font-family: "Montserrat-SemiBold", Helvetica;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: normal;
    margin-top: -1px;
    position: relative;
    width: fit-content;
`;

// const ButtonGroup = styled.div`
//     align-items: flex-start;
//     display: inline-flex;
//     gap: 32px;
//     left: 320px;
//     position: absolute;
//     top: 232px;
// `;
 

//map out projects from data.json

const FeaturedProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
      // Assuming the data is in the correct format as per your JSON structure
      setProjects(projectData);
  }, []);


    return (
      <Container>
        <FeaturedProjectsContainer>
            <Title>Featured Projects</Title>
            {projects.map(project => (
                <Project key={project.id}>
                    <ProjectImage src={project.image} alt={project.title} />
                    <Frame>
                        <Header>{project.title}</Header>
                        <Text>{project.description}</Text>
                        <TechStack>
                            {project.techStack.map((tech, index) => (
                                <TechItem key={index}>
                                    <TechText>{tech}</TechText>
                                </TechItem>
                            ))}
                        </TechStack>
                        <LiveDemoButton href={project.link}>Live Demo</LiveDemoButton>
                        <ViewCodeButton href={project.link}>View Code</ViewCodeButton>
                        {/* Buttons can be added here */}

                    </Frame>
                    {/* ButtonGroup component could be used here if buttons are needed */}
                </Project>
            ))}
        </FeaturedProjectsContainer>
        </Container>
    );
};

export default FeaturedProjects;
