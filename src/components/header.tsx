import styled from 'styled-components';
import HeaderLogo from '../../public/headerLogo.svg';

const Container = styled.div`
  width: 100%;
  height: 12vh;
  padding-left: 9vw; 
  margin-top: 3vh;
`
const LogoImg = styled.img`
  width: 28vw;
  height: 100%;
`;


export default function Header() {

  return (
    <Container>
      <LogoImg src={HeaderLogo} />
    </Container>
  );
}