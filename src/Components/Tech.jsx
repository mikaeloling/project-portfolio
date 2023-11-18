import styled from 'styled-components';

const TechContainer = styled.div`
  display: grid;
  height: 980px;
  background-color: #0b24f5;
  grid-template-columns: 1fr 1fr;
  padding: 2rem;
  text-align: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    height: 796px;
    padding: 0.5rem;
  }'
  
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    height: 400px;
    padding: 0.5rem;
  }
  
  `
  

const Title = styled.div`
  display: flex;
  font-family: 'Montserrat-Bold', Helvetica;
  align-self: center;
  font-size: 80px;
  font-weight: 700;
  justify-content: center;
  margin-left: 230px;
  margin-right: 124px;
  
  `
const Body = styled.div`
  display: flex;
  font-family: 'Hind-SemiBold', Helvetica;
  font-size: 32px;
  font-weight: 600;
  align-self: center;
  color: #ffffff;
  margin-right: 128px;
  `


const Tech = () => {
    return (
      <TechContainer>
        <Title>
          Tech
        </Title>
          <Body>
              HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, React Hooks, Node.js, Mongo DB, Web Accessibility, APIs, mob-programming, pair-programming, GitHub.
          </Body>
      </TechContainer>
    );
  };

export default Tech;