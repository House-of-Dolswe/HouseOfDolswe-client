import styled from "styled-components";
import CloseModalIcon from "../../public/closeModalIcon.svg";

interface ThanksToModalProps {
  profileImg: string;
  name: string;
  content: string;
  onClose: () => void;
}

export default function ThanksToModal({ profileImg, name, content, onClose }: ThanksToModalProps) {

  const onBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
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
  width: 320px;
  padding: 20px;
  border-radius: 23px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 5vw;

`;

const Header = styled.div`
  position: relative;
  width: 100%;
  padding: 10px 0;
  display: flex;
  align-items: center;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 4vw;
  width: 100%;
  text-align: center;
`;

const ProfileImage = styled.img`
  width: 10vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CloseButton = styled.div`
  background: none;
  border: none;
  padding-left: 10px;
`;

const CloseIcon = styled.img`
  width: 2.8vw;
`;

const Content = styled.div`
  font-size: 14px;
  color: #333;
`;
