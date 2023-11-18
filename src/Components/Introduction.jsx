import pic1 from '../assets/pic1.jpeg';
import styled from 'styled-components';

const StyledIntroductionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: auto 0 0;
  position: relative;
  background-color: rgb(255, 255, 255);
  height: 980px;
  `;

const IntroductionBody = styled.div`
flex: 0 0 auto;
display: inline-flex;
flex-direction: column;

gap: 16px;
position: relative;
  `;
const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  .textwrapper {
    font-family: 'Montserrat', sans-serif;
    font-size: 32px;
    font-weight: 600;
    color: #000000;
    margin-bottom: 0.5rem;
  }
  .textwrapper2 {
    font-family: 'Montserrat', sans-serif;
    font-size: 80px;
    font-weight: 600;
    color: #0b24f5;
    margin-bottom: 0.5rem;
  }
  `;
const ImgTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  `;
const Image = styled.div`
  background-image: url(${pic1});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 164px;
  height: 164px;
  border-radius: 50%;
  margin-right: 2rem;
  `;
const Text = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  font-weight: 400;
  width: 600px;
  color: #000000;
  `;


export const Introduction = () => {


  return (
    <StyledIntroductionContainer>
      <IntroductionBody>
        <HeaderContainer>
          <div className="textwrapper" >Hi, I'm Mikael Öling</div>
            <div className="textwrapper2">Frontend Developer</div>
          </HeaderContainer>
        <ImgTextContainer>
        
          <Image></Image>
          <Text>
          Mikael is a versatile marketer, entrepreneur, and developer, constantly seeking to acquire new knowledge and bring his unique ideas to life. He is recognized for his innovative solutions and exceptional coding abilities. Mikael develops user-friendly applications and effortlessly resolves complex issues. His pursuit of excellence makes him an invaluable asset to any project and a notable figure in the technology field.
              </Text>
        </ImgTextContainer>
      
        </IntroductionBody>
    </StyledIntroductionContainer>
  );
  };

export default Introduction;