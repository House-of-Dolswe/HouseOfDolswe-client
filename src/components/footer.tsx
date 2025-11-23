import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import AlarmOffIcon from '../../public/alarmOffIcon.svg';
import AlarmOnIcon from '../../public/alarmOnIcon.svg';
import AudioOffIcon from '../../public/audioOffIcon.svg';
import AudioOnIcon from '../../public/audioOnIcon.svg';
import SettingOffIcon from '../../public/settingOffIcon.svg';
import SettingOnIcon from '../../public/settingOnIcon.svg';

const Container = styled.div`
  width: 100%;
  height: 13vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 17vw;
  box-shadow: 4px 4px 20.7px 0px #00000021;

  position: fixed;
  bottom: 0;
  left: 0;
  background: white;
  z-index: 100;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PageIcon = styled.img`
  width: 6vw;

`;

const PageTitle = styled.p<PageTitleProps>`
  color: ${(props) => (props.active ? "#222222" : "#9E9E9E")};
  font-size: 1.2vh;
  margin: 0.5vh;
`;

interface PageTitleProps {
  active: boolean;
}


export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const activeMenu = 
    location.pathname.includes("call") ? "call" :
    location.pathname.includes("audio") ? "audio" :
    location.pathname.includes("settings") ? "settings" :
    "audio";

  return (
    <Container>
      <IconWrapper 
        onClick={() => navigate("/call")}
      >
        <PageIcon src={activeMenu === "call" ? AlarmOnIcon : AlarmOffIcon} />
        <PageTitle active={activeMenu === "call"}>돌쇠의 전화</PageTitle>
      </IconWrapper>

      <IconWrapper 
        onClick={() => navigate("/audio")}
      >
        <PageIcon src={activeMenu === "audio" ? AudioOnIcon : AudioOffIcon} />
        <PageTitle active={activeMenu === "audio"}>오디오</PageTitle>
      </IconWrapper>

      <IconWrapper 
        onClick={() => navigate("/settings")}
      >
        <PageIcon src={activeMenu === "settings" ? SettingOnIcon : SettingOffIcon} />
        <PageTitle active={activeMenu === "settings"}>설정</PageTitle>
      </IconWrapper>
    </Container>
  );
}