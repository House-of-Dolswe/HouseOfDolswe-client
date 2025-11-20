import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import AlarmOffIcon from '../../public/alarmOffIcon.svg';
import AudioOnIcon from '../../public/audioOnIcon.svg';
import SettingOffIcon from '../../public/settingOffIcon.svg';

const Container = styled.div`
  width: 100%;
  height: 13vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 17vw;
  box-shadow: 4px 4px 20.7px 0px #00000021;
`
const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const PageIcon = styled.img`
  width: 6vw;

`;

const PageTitle = styled.p`
  color: #9E9E9E;
  font-size: 1.2vh;
  margin: 0.5vh;
`;


export default function Footer() {
  const navigate = useNavigate();

  return (
    <Container>
        <IconWrapper onClick={() => navigate("/notice")}>
            <PageIcon src={AlarmOffIcon} />
            <PageTitle>공지사항</PageTitle>
        </IconWrapper>
        <IconWrapper onClick={() => navigate("/audio")}>
            <PageIcon src={AudioOnIcon} />
            <PageTitle>오디오</PageTitle>
        </IconWrapper>
        <IconWrapper onClick={() => navigate("/settings")}>
            <PageIcon src={SettingOffIcon} />
            <PageTitle>설정</PageTitle>
        </IconWrapper>
    </Container>
  );
}