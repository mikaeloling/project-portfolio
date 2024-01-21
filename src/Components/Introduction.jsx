import styled from 'styled-components';
import Mikael1 from '../assets/Mikael1.jpg';
import { StyledArrow } from '../uicomponents/Arrow';

const StyledIntroductionContainer = styled.div` 
display: flex;
padding: 328px 328px;
flex-direction: column;
background-color: #ffffff;
align-items: center;
justify-content: center;
gap: 16px;

`;



const HeaderContainer = styled.div`
  
  .textwrapper {
    color: #000000;
    font-family: 'Montserrat-SemiBold', Helvetica;
    font-size: 3vh;
    font-weight: 600;
    letter-spacing: 0;
    line-height: normal;
   
    
  }
  .textwrapper2 {
    color: #0b24f5;
    font-family: 'Montserrat-Bold', Helvetica;
    font-size: 80px;
    font-weight: 700;
  }
  `;
const ImgTextContainer = styled.div`
  display: inline-flex;
  flex-direction: row;
  
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
  
  
  }

  
  `;
const Image = styled.div`
  background-image: url(${Mikael1});
  background-size: cover; 
  width: 264px;
  height: 264px;
  border-radius: 50%;

  @media (max-width: 768px) {
    display: none;
  }
  `;
    
  const MobileImage = styled.div`
  background-image: url(${Mikael1});
  background-size: cover;
  width: 264px;
  height: 264px;
  border-radius: 50%;
  display: none;

  @media (max-width: 768px) {
    display: block;

  }

 

  `;
const Text = styled.div`
color: #000000;
font-family: "Hind-Regular", Helvetica;
font-size: 3vh;
font-weight: 400;

  `;

const Arrow = styled.div`
  margin-bottom: 64px;

  `;

export const Introduction = () => {


  return (
    <StyledIntroductionContainer>
      <MobileImage />
      <HeaderContainer>
        
          <div className="textwrapper" >Hi, I´m Mikael Öling</div>
            <div className="textwrapper2">Frontend Developer</div>
          </HeaderContainer>
      
        
        <ImgTextContainer>
        
          <Image></Image>
          <Text>
          Hello! My name is Mikael and I am a marketer that has gone insane and decided to become a frontend developer. I manage e-commerce websites, create marketing texts, run ads on Meta and Google and build my own web applications. If you are interested in working with me, feel free to contact me!

              </Text>
        </ImgTextContainer>
      <StyledArrow> <Arrow /></StyledArrow>
    </StyledIntroductionContainer>
  );
  };

export default Introduction;