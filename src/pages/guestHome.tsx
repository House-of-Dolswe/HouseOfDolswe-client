import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LogoWhite from "../../public/logoWhite.svg";
import KakaoIcon from "../../public/kakaoIcon.svg";

const Container = styled.div `
  background: linear-gradient(#626262, #000000);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
`;

const KakaoImg = styled.img`
  width: 4vw;
  height: auto;
`;


export default function Home() {
  const navigate = useNavigate();

  const loginWithKakao = () => {
    if (!window.Kakao || !window.Kakao.Auth) return;
    window.Kakao.Auth.setAccessToken(null);

  window.Kakao.Auth.login({
    throughTalk: false,           // 카톡 자동 로그인 방지
    persistAccessToken: false,    // 브라우저 저장 방지 -> 매번 팝업 창 뜸
    scope: "profile_nickname",
    success: (authObj: any) => {
      console.log("카카오 로그인 성공:", authObj);
      // access_token 여기서 바로 사용 가능
      window.Kakao.API.request({
        url: "/v2/user/me",
          success: (res: any) => {
            console.log("유저 정보:", res);
            navigate("/onboarding");
          },
        fail: (err: any) => console.error(err),
      });
    },
    fail: (err: any) => {
      console.error("카카오 로그인 실패:", err);
    },
  });
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

