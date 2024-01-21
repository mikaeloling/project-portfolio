import styled, {keyframes} from "styled-components";


const scrollAnimation = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;

const StyledTickerTapeContent = styled.div`
  background-color: #ff4575;
  height: 104px;
  position: relative;
  width: 100%;
 
  overflow: hidden;


  & .text-wrapper {
    color: #ffffff;
    font-family: "Montserrat-SemiBold", Helvetica;
    font-size: 26px;
    font-weight: 600;
    left: 13px;
    letter-spacing: 0;
    line-height: 37.9px;
    position: absolute;
    top: 10px;
    white-space: nowrap;

    display: inline-block;
    animation: ${scrollAnimation} 40s linear infinite;
  }
`;

export const TickerTape = () => {
  return (
    <StyledTickerTapeContent>
      <p className="text-wrapper">
        Mikael Öling · Frontend Developer · Mikael Öling · Digital Marketer · Mikael Öling · Full-time Hustler · Mikael Öling · Frontend Developer · Mikael Öling · Lifelong Learner
      </p>
    </StyledTickerTapeContent>
  );
};

export default TickerTape;