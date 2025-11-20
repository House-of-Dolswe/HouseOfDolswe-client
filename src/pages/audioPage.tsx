import { useEffect } from "react";
import styled from "styled-components";
import useLoading from "../hooks/useLoading";
import Header from "../components/header";
import Footer from "../components/footer";
import AudioItem from "../components/audioItem";
import Spinner from "../../public/loadingSpinner.gif";


const LoadingContainer = styled.div `
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div `
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const SpinnerImg = styled.img`
  width: 10vw;
`;

const FooterWrapper = styled.div`
  margin-top: auto;   // 핵심
`;


export default function AudioPage() {
  const { isLoading, stopLoading } = useLoading(true); 

  useEffect(() => {
    async function loadAudioData() {
      try {
        // 1초 동안 로딩
        await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (error) {
        console.error(error);
      } finally {
        stopLoading();
      }
    }

    loadAudioData();
  }, []);

  return (
    <>
      {isLoading ?
      <LoadingContainer>
        <SpinnerImg src={Spinner} alt="Loading"/>
      </LoadingContainer>
      :
      <Container>
        <Header />
        <AudioItem />
        <FooterWrapper>
          <Footer />
        </FooterWrapper>
      </Container>}
    </>
  );
}