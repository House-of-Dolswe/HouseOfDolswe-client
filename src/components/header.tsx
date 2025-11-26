import { useNavigate } from 'react-router-dom';
import { useHeart } from '../context/heartContext';
import styled from 'styled-components';
import HeaderLogo from '../../public/headerLogo.svg';
import Heart from '../../public/heart.svg';
import FillHeart from '../../public/fillHeart.svg';

const Container = styled.div`
  width: 100%;
  height: 8vh;
  padding-left: 9vw; 
  margin-top: 4vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoImg = styled.img`
  width: 28vw;
  height: 100%;
`;

const HeartIcon = styled.button`
  background: none;
  border: none;
  padding: 0;
  width: 6vw;
  height: auto;
  outline: none;
  margin-right: 9vw;
`


export default function Header() {

  const { isClicked, toggleClick } = useHeart();
  const navigate = useNavigate();


  return (
    <Container>
      <LogoImg src={HeaderLogo} />
        <HeartIcon onClick={() => {
          toggleClick();
          navigate("/thanks");
        }}>
          <img 
              src={isClicked ? FillHeart : Heart}
              style={{ width: "6vw" }}
            />
        </HeartIcon>
    </Container>
  );
}