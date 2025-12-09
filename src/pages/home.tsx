import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LogoWhite from "../../public/logoWhite.svg";

export default function Home() {
  const navigate = useNavigate();
  
    useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/audio");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);



  return (
    <Container>
      <LogoWrapper>
        <LogoImg src={LogoWhite} alt="Logo Text White" />
      </LogoWrapper>
    </Container>
  );
}

const Container = styled.div `
  background: linear-gradient(#626262, #000000);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LogoWrapper = styled.div`
  
`;

const LogoImg = styled.img`
  width: 50vw;
  height: 50vh;
`;
