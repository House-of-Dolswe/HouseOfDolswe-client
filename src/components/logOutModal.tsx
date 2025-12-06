import styled from "styled-components";

interface LogOutModalProps {
  onClose: () => void;
}

export default function LogOutModal({ onClose }: LogOutModalProps) {

  const onBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };


  return (
    <Backdrop onClick={onBackdropClick}>
      <ModalBox>
        <Header>
          <Title>로그아웃</Title>
        </Header>
        <Content>
          돌쇠의 집에서 로그아웃 하시겠습니까?
        </Content>
        <ButtonWrapper>
            <LogOutButton>
               로그아웃
            </LogOutButton>
            <CancelButton onClick={onClose}>
               돌아가기
            </CancelButton>
        </ButtonWrapper>
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
  border-radius: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 6vw;
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

const Content = styled.div`
  font-size: 3.5vw;
  color: #000000;
  text-align:center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2vw;
  margin: 0.5vh;
`;

const LogOutButton = styled.button`
  width: 31vw;
  height: 4.5vh;
  background-color: #E6E9EB;
  border-radius: 10px;
  font-size: 3.2vw;
  color: #B0BABF;
  border: none;
`;

const CancelButton = styled.button`
  width: 31vw;
  height: 4.5vh;
  background-color: #A304FF;
  border-radius: 10px;
  font-size: 3.2vw;
  border: none;
  color: #FFFFFF;
`;
