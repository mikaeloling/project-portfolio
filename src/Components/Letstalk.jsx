import styled from 'styled-components';


import pic1 from '../assets/pic1.jpeg';

const Container = styled.div`
    display: grid;
    height: auto;
    background-color: #ffffff;
    grid-template-columns: 1fr;
    
    text-align: center;


    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        height: 796px;
    }
    @media (max-width: 500px) {
        grid-template-columns: 1fr;
        height: 400px;
    }
`;

const Title = styled.div`
    display: flex;
    font-family: 'Montserrat', sans-serif;
    align-self: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: 600;
    color: #000000;
`;

const Image = styled.div`
    justify-content: center;
    margin: 0 auto; 
    width: 150px;
    height: 150px;
    background-image: url(${pic1});
    mask-image: 50% 50% / 100% 100% linear-gradient(white, transparent);
`;

const ContactInfo = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5rem;
    align-self: center;
    font-weight: 400;
    color: #000000;
`;




export const LetsTalk = () => {
    return (
        
        <Container>
            <Title>
                Let&lsquo;s Talk
            </Title>
            <Image>
                
            </Image>
            <ContactInfo>
                
                <p>Phone: 123-456-7890</p>
                <p>Email:
                    <a href="mailto:
                    mikael.oling@gmail.com">
                </a>    
                </p>
            </ContactInfo>

            {/* <IconSection>
                <a href="https://www.linkedin.com/in/mikael-oling-3b7b7b1b1/">
                    <img src={linkedin} alt="linkedin" />
                </a>
                <a href="https://www.github.com/mikaeloling">
                    <img src={github} alt="github" />
                </a>
            </IconSection>   */}

        </Container>
       
    );
};




export default LetsTalk;