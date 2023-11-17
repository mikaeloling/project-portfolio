// export const Tech = () => {
//     return (
//         <div className="tech">
//             <div className="title">Tech</div>
//             <p className={style.HTMLCSSflexbox}>
//                 HTML, CSS, Flexbox, JavaScript, ES6, <br />
//                 JSX, React, React Hooks, Node.js, <br />
//                 Mongo DB, Web Accessibility, APIs, <br />
//                 mob-programming, pair-programming, GitHub.
//             </p>
//         </div>
//     );
// };
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
  font-family: 'Montserrat', sans-serif;
  align-self: center;
 
 
  font-size: 2rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.5rem;
  `
const Body = styled.div`
  display: flex;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
 
 
  align-self: center;
  font-weight: 400;
  color: #ffffff;
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