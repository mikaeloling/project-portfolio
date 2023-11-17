import pic1 from '../assets/pic1.jpeg';
import styled from 'styled-components';

const StyledIntroductionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 255, 255);
  height: 100vh;
  width: 100%;
  `;

const IntroductionBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `;
const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .textwrapper {
    font-family: 'Montserrat', sans-serif;
    font-size: 2.5rem;
    font-weight: 600;
    color: #000000;
    margin-bottom: 0.5rem;
  }
  .textwrapper2 {
    font-family: 'Montserrat', sans-serif;
    font-size: 2rem;
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
  width: 300px;
  height: 300px;
  border-radius: 50%;
  margin-right: 2rem;
  `;
const Text = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  color: #000000;
  width: 500px;
  `;


export const Introduction = () => {


  return (
    <StyledIntroductionContainer>
      <IntroductionBody>
        <HeaderContainer>
          <div className="textwrapper" >Hi, Im Sara Svensson</div>
            <div className="textwrapper2">Frontend Developer</div>
          </HeaderContainer>
        <ImgTextContainer>
        
          <Image></Image>
          <Text>
              Sara is an exceptional developer known for her innovative solutions and exceptional coding abilities. She
              creates user-friendly applications and solves complex issues with ease. Her drive for excellence makes her a
              valuable asset to any project and a standout in the technology field.
              </Text>
        </ImgTextContainer>
      
        </IntroductionBody>
    </StyledIntroductionContainer>
  );
  };

export default Introduction;