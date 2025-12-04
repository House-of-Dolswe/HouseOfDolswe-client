import { useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import styled from "styled-components";
import SpeakerOnIcon from "../../public/speakerOnIcon.svg";
import SpeakerOffIcon from "../../public/speakerOffIcon.svg";
import MoveToIcon from "../../public/MoveToIcon.svg";

export default function Settings() {
  const [isClicked, setIsClicked] = useState(false);

  const handleToggle = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <>
      <Header />
       <Container>
        <TitleBar>설정</TitleBar>
        <TextBox>기본 오디오가 수화기 모드로 재생됩니다.</TextBox>
        <MenuBox onClick={handleToggle}>
          스피커 모드
          <SpeakerButton src={isClicked ? SpeakerOnIcon : SpeakerOffIcon} />
        </MenuBox>
        <MenuBox>
          계정 관리
          <MoveToButton src={MoveToIcon} />
        </MenuBox>
        <MenuBox>
          서비스 개선에 기여하기
          <MoveToButton src={MoveToIcon} />
        </MenuBox>
        <MenuBox>버전 정보 1.0.0</MenuBox>
       </Container>
      <Footer />
    </>
  );
}

const Container = styled.div`

`
const TitleBar = styled.div`
  width: 100%;
  border-bottom: 0.2vh solid #EEEEEE;
  color: #616161;
  font-weight: 500;
  font-size: 4vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2vw;
  margin-top: 1vh;
`
const TextBox = styled.p`
  color: #9C9CA7;
  font-size: 3.2vw;
  padding: 2vw 4vh;
  margin-top: 2vh;
  margin-bottom: 0;
  border-bottom: 0.2vh solid #F2F2F7;
`
const MenuBox = styled.div`
  display: flex;
  align-items: center;
  height: 6.5vh;
  font-size: 4.3vw;
  font-weight: 400;
  padding: 2vw 4vh;
  margin: 0;
  border-bottom: 0.2vh solid #F2F2F7;
`
const SpeakerButton = styled.img`
  width: 13vw;
  position: absolute;
  right: 8vw;
`
const MoveToButton = styled.img`
  width: 7vw;
  position: absolute;
  right: 6.5vw;
`