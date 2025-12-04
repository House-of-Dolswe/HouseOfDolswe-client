import styled from "styled-components";
import CloseModalIcon from "../../public/closeModalIcon.svg";

interface ThanksToModalProps {
  profileImg: string;
  name: string;
  content: string;
  url?:string;
  onClose: () => void;
}

export default function ThanksToModal({ profileImg, name, content, url, onClose }: ThanksToModalProps) {

  const onBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleVisit = () => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <Backdrop onClick={onBackdropClick}>
      <ModalBox>
        <Header>
          <CloseButton onClick={onClose}>
            <CloseIcon src={CloseModalIcon} />
          </CloseButton>
          <Title>{name}</Title>
        </Header>
        <ProfileImage src={profileImg} />
        <Content>
          {content}
        </Content>
        <VisitButton
          disabled={!url}
          onClick={handleVisit}
        >
          방문하기
        </VisitButton>
      </ModalBox>
    </Backdrop>
  );
}


const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalBox = styled.div`
  width: 75%;
  padding: 3vh 7.5vw;
  border-radius: 23px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 8vw;
`;

const Header = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

`;

const Title = styled.h3`
  margin: 0;
  font-size: 4vw;
  width: 100%;
  text-align: center;
`;

const ProfileImage = styled.img`
  width: 25vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CloseButton = styled.div`
  background: none;
  border: none;
  position: absolute;
  left: 0;
  top: -0.1vh;
`;

const CloseIcon = styled.img`
  width: 2.3vw;
`;

const Content = styled.div`
  font-size: 3.2vw;
  color: #000000;
  margin-bottom: 3vh;
`;

const VisitButton = styled.button<{disabled?: boolean}>`
  width: 100%;
  height: 4.5vh;
  background-color: ${({ disabled }) => (disabled ? "#E6E9EB" : "#000000")};
  border-radius: 12px;
  font-size: 3.2vw;
  color: ${({ disabled }) => (disabled ? "#B0BABF" : "#FFFFFF")};
  border: none;
`;
