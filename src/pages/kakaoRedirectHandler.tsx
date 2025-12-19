import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function KakaoRedirectHandler() {
  const navigate = useNavigate();
  const calledRef = useRef(false);

  useEffect(() => {
    if (calledRef.current) return;
    calledRef.current = true;

    const code = new URL(window.location.href).searchParams.get("code");
    if (!code) return;

    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/api/login/kakao`, {
        params: { code },
      })
      .then((res) => {
        const { onboardingRequired, accessToken, refreshToken } =
          res.data.result;

        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);

        if (onboardingRequired) {
          navigate("/onboarding");
        } else {
          navigate("/audio");
        }
      })
      .catch((err) => {
        console.error("카카오 로그인 실패", err);
      });
  }, []);

  return <div>로그인 처리 중...</div>;
}
