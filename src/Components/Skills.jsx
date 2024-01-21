import styled from "styled-components";

const StyledSkills = styled.div`
  background-color: #0b24f5;
  height: height: 100%;
  // position: relative;
  height: auto;
  align-items: center;
  padding: 100px 128px;

  & .title {
    color: #ffffff;
    font-family: "Montserrat-Bold", Helvetica;
    font-size: 80px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: normal;
    position: relative;
    text-align: center;
    margin-bottom: 64px;
    }

  & .frame {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: flex-start;
    gap: 64px;
   
    @media (max-width: 1024px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      
    
    @media (max-width: 768px) {
      display: grid;
      grid-template-columns: 1fr;
      text-align: center;
    
      
    }
  
  }

  & .div {
    align-items: flex-start;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 16px;
    position: relative;
  }

  & .code {
    align-items: flex-start;
    background-color: #eb5577;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 8px;
    padding: 2px;
    position: relative;
  }

  & .text-wrapper {
    color: #ffffff;
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
    color: #ffffff;
    font-family: "Hind-Regular", Helvetica;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: normal;
    position: relative;
    width: fit-content;
  }

  & .toolbox {
    align-items: flex-start;
    background-color: #2483e0;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 8px;
    padding: 2px;
    position: relative;
  }

  & .upcomming {
    align-items: flex-start;
    background-color: #6db385;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 8px;
    padding: 2px;
    position: relative;
  }

  & .more {
    align-items: flex-start;
    background-color: #ffdd2f;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 8px;
    padding: 2px;
    position: relative;
  }

  & .text-wrapper-3 {
    color: #0b24f5;
    font-family: "Montserrat-SemiBold", Helvetica;
    font-size: 32px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: normal;
    margin-top: -1px;
    position: relative;
    width: fit-content;
  }
`;

export const Skills = () => {
  return (
    <StyledSkills>
      <div className="title">Skills</div>
      <div className="frame">
        <div className="div">
          <div className="code">
            <div className="text-wrapper">Code</div>
          </div>
          <div className="text-wrapper-2">
            HTML5
            <br />
            CSS3
            <br />
            Javascript ES6
            <br />
            React
            <br />
            Styled Components
            <br />
            GitHub
          </div>
        </div>
        <div className="div">
          <div className="toolbox">
            <div className="text-wrapper">Toolbox</div>
          </div>
          <div className="text-wrapper-2">
            Atom
            <br />
            Postman
            <br />
            Adobe Photoshop
            <br />
            Adobe Illustrator
            <br />
            Figma
            <br />
            Keynote <br />
            Slack
          </div>
        </div>
        <div className="div">
          <div className="upcomming">
            <div className="text-wrapper">Upcoming</div>
          </div>
          <div className="text-wrapper-2">Node.js</div>
        </div>
        <div className="div">
          <div className="more">
            <div className="text-wrapper-3">More</div>
          </div>
          <p className="text-wrapper-2">
            Design Lead
            <br />
            Branding
            <br />
            Strategy
            <br />
            Process design
            <br />
            Concept development
            <br />
            Agile methodology <br />
            Hyper Island toolbox
          </p>
        </div>
      </div>
    </StyledSkills>
  );
};

export default Skills;