import styled from "styled-components";
import Mikael1 from "../assets/Mikael1.jpg";

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    
    `;

  const Image = styled.div`
  background-image: url(${Mikael1});
  background-size: cover; 
  width: 264px;
  height: 264px;
  border-radius: 50%;
    `;

const StyledLetsTalk = styled.div`
      background-color: #ffffff;
      padding-top: 128px;
  
  & .title {
    color: #0b24f5;
    font-family: "Montserrat-Bold", Helvetica;
    font-size: 80px;
    font-weight: 700;
    align-items: center;
    letter-spacing: 0;
    line-height: normal;
    position: relative;
    text-align: center;
  }

  & .frame {
    display: inline-flex;
    flex-direction: column;
    gap: 64px;
    position: relative;
    align-items: center;
    width: 100%;
    padding: 128px 0;  }

 

    & .div {
        align-items: center;
        display: inline-flex;
        flex-direction: column;

        gap: 8px;
     
      }

  & .text-wrapper {
    color: #000000;
    font-family: "Montserrat-SemiBold", Helvetica;
    font-size: 32px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: normal;
    margin-top: -1px;
    position: relative;
    width: fit-content;
  }

  & .text-wrapper-2 {
    color: #000000;
    font-family: "Montserrat-SemiBold", Helvetica;
    font-size: 32px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: normal;
    position: relative;
    width: fit-content;
  }

  & .social-links {
    align-items: flex-end;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 32px;
    position: relative;
  }

  & .icon-instance-node {
    height: 32px !important;
    position: relative !important;
    width: 32px !important;
  }
`;

export const LetsTalk = () => {
  return (
<Container>
    
    <StyledLetsTalk>
      <div className="title">Let’s talk</div>
      <div className="frame">
        <Image />
        <div className="div">
          <div className="text-wrapper">Mikael Öling</div>
          <div className="text-wrapper-2">+358(0)44 0428822</div>
          <div className="text-wrapper-2">mikael.oling@mail.com</div>
        </div>
        <div className="social-links">
          {/* <BtnLinkedin className="icon-instance-node" color="#D0D0D0" /> */}
          {/* <Property1Hover className="icon-instance-node" color="#D0D0D0" /> */}
          {/* <BtnStackoverflow className="icon-instance-node" />
          <BtnTwitter className="icon-instance-node" />
          <BtnInstagram className="icon-instance-node" color="#D0D0D0" /> */}
        </div>
      </div>
    </StyledLetsTalk>
    
    </Container>
  );
};




export default LetsTalk;