import styled from 'styled-components';

const TechContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #0b24f5;  
  align-items: center;
  padding: 128px 328px;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    height: 600px;
    padding: 10px 10px;
  }

  `;

  
const Title = styled.div`
  color: #ffffff;
  font-family: 'Montserrat-Bold', Helvetica;
  font-size: 80px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;

  @media (max-width: 768px) {
    margin-bottom: 64px;
    position: relative;
    text-align: center;
    height: fit-content;
   
  }
  `;
  

  
  
const Body = styled.div`
  color: #ffffff;
  font-family: 'Hind-SemiBold', Helvetica;
  font-size: 3vh;
  
  
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    text-align: center;
    height: flex-content;
  
    
  }
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

