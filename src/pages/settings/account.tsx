import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer";
import Header from "../../components/header";
import styled from "styled-components";
import MoveToIcon from "../../../public/moveToIcon.svg";
import LogOutModal from "../../components/logOutModal";
import SignOutModal from "../../components/signOutModal";

export default function Account() {
  const navigate = useNavigate();
  const [modalType, setModalType] = useState<"logout" | "signout" | null>(null);

  const openLogOutModal = () => setModalType("logout");
  const openSignOutModal = () => setModalType("signout");
  const closeModal = () => setModalType(null);

  return (
    <>
      <Header />
       <Container>
        <TitleBar>계정 관리</TitleBar>
        <MenuBox>
          로그아웃
          <MoveToButton 
          src={MoveToIcon}
          onClick={() => openLogOutModal()}
          />
        </MenuBox>
        <MenuBox>
          계정 탈퇴
          <MoveToButton 
          src={MoveToIcon}
          onClick={openSignOutModal}
          />
        </MenuBox>
        <MenuBox>
          서비스 이용약관
          <MoveToButton src={MoveToIcon} onClick={()=>navigate("/settings/servicePolicy")}/>
        </MenuBox>
        <MenuBox>
          개인정보처리방침
          <MoveToButton src={MoveToIcon} onClick={()=>navigate("/settings/dataPolicy")}/>
        </MenuBox>
       </Container>
      {modalType === "signout" && (
        <SignOutModal onClose={closeModal} />
      )}

      {modalType === "logout" && (
        <LogOutModal onClose={closeModal} />
      )}
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
const MoveToButton = styled.img`
  width: 7vw;
  position: absolute;
  right: 6.5vw;
`