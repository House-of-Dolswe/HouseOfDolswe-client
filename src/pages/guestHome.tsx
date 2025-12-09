import styled from "styled-components";
import LogoWhite from "../../public/logoWhite.svg";
import KakaoIcon from "../../public/kakaoIcon.svg";


export default function GuestHome() {

  console.log("GuestHome 렌더됨");

  const loginWithKakao = () => {
    console.log("버튼 클릭됨!"); 
    const REST_API_KEY = import.meta.env.VITE_KAKAO_CLIENT_ID;
    const REDIRECT_URI = `${import.meta.env.VITE_FRONTEND_BASE_URL}/login/oauth`; 
    // ← 카카오 설정에서 등록한 redirect URI와 같아야 함!

    const kakaoAuthUrl =
    `https://kauth.kakao.com/oauth/authorize` +
    `?response_type=code` +
    `&client_id=${REST_API_KEY}` +
    `&redirect_uri=${encodeURIComponent(REDIRECT_URI)}`;

    console.log("카카오 요청 URL:", kakaoAuthUrl);
    window.location.href = kakaoAuthUrl;
    console.log(`${import.meta.env.VITE_API_BASE_URL}/api/login/kakao`);
    
  };

  

  return (
    <Container>
        <LogoWrapper>
            <LogoImgWrapper>
                <LogoImg src={LogoWhite} alt="Logo Text White" />
            </LogoImgWrapper>
            <LogoText>언제 어디서든, 내 주머니 속 포켓 돌쇠</LogoText>
        </LogoWrapper>
      <LoginButton onClick={loginWithKakao}>
        <KakaoImg src={KakaoIcon} alt="Kakao Icon" />
        카카오 로그인
      </LoginButton>
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
  position: relative;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LogoImgWrapper = styled.div`
`;

const LogoImg = styled.img`
  width: 50vw;
  height: auto;
  display: block; 
  margin: -5px;
`;

const LogoText = styled.p`
  color: white;
  font-size: 3.3vw;
`;

const LoginButton = styled.button`
  width: 80vw;
  padding: 3vw;
  border-radius: 15px;
  position: absolute;
  bottom: 7vh;
  background-color: #FEE500;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
  display: flex;
  justify-content: center;
  gap: 2vw;
  z-index: 10;
`;

const KakaoImg = styled.img`
  width: 4vw;
  height: auto;
`;
