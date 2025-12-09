import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function KakaoRedirectHandler() {
  const navigate = useNavigate();

  useEffect(() => {
  const code = new URL(window.location.href).searchParams.get("code");

  if (!code) return;

  console.log("code:", code);

  axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/login/kakao`, {
    params: { code },
  })
  .then((res) => {
    console.log("로그인 성공:", res.data);

    const { accessToken, refreshToken, onboardingRequired } = res.data.result;

    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);

    if (onboardingRequired) navigate("/onboarding");
    else navigate("/home");
  })
  .catch((err) => console.error("로그인 실패:", err));
}, []);

  return <div>로그인 처리중...</div>;
}
