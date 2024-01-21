import styled from 'styled-components';

const FullWidthDivider = styled.div`
  width: 100%;
  height: 20px; // Adjust the height as needed
  background-image: 
    url("data:image/svg+xml,%3Csvg width='100%25' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 0,10 Q 25,0 50,10 T 100,10' fill='none' stroke='%23FF4575' stroke-width='5'/%3E%3C/svg%3E");
  background-repeat: repeat-x;
`;

const Divider = () => {
  return <FullWidthDivider />;
}

export default Divider;


