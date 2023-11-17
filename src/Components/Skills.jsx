import styled from "styled-components";

const SkillsContainer = styled.div`
  display: flex;

  flex-direction: column;

  height: auto;
  background-color: #0b24f5;
  
  padding: 2rem;
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

  const Title = styled.div`
  display: flex;
  font-family: 'Montserrat', sans-serif;
  align-self: center;
  font-size: 2rem;
  font-weight: 600;
  color: #000000;
  margin-bottom: 0.5rem;
  `
  const Body = styled.div`
  display: flex;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  align-self: center;
  font-weight: 400;
  color: #000000;
  `
  const Columns = styled.div`
  display: grid;
  margin: 0 auto;
  width: 100%;
  
  grid-template-columns: 1fr 1fr 1fr 1fr;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    height: 796px;
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    height: 400px;
  }
  `

  
const Skills = () => {
  return (
      <SkillsContainer>
        <Title>
          Skills
        </Title>
        <Columns>
          <div>
            <Body>
              <div>
                <h3>Code</h3>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Redux</li>
                  <li>jQuery</li>
                  <li>Bootstrap</li>
                  <li>Material UI</li>
                  <li>Styled Components</li>
                  <li>Responsive Design</li>
                </ul>
              </div>
              
              <div>
                <h3>Tools</h3>
                <ul>
                  <li>Git</li>
                  <li>GitHub</li>
                  <li>Heroku</li>
                  <li>Netlify</li>
                  <li>VS Code</li>
                  <li>Postman</li>
                  <li>Chrome DevTools</li>
                  <li>npm</li>
                  <li>Yarn</li>
                </ul>
              </div>

              <div>
                <h3>Upcoming</h3>
                <ul>
                  <li>Node.js</li>
                </ul>
              </div>
            </Body>
          </div>
        </Columns>
      </SkillsContainer>
  );
}

export default Skills;



