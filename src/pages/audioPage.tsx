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
  margin-top: auto;
`;

interface AudioData {
  title: string;
  name: string;
  tags: string[];
}

export default function AudioPage() {
  const audioMockData: AudioData[] = [
  {
    
    title: "누구세요?",
    name: "장춘배",
    tags: ["택배", "배달", "당근"],
  },
  {
    
    title: "네~ 문 앞에 두고 가세요",
    name: "장춘배",
    tags: ["택배", "배달", "당근"],
  },
  {
    
    title: "문 앞에 있는 거 가져가시면 돼요",
    name: "김OO",
    tags: ["택배", "배달", "당근"],
  },
  {
    
    title: "제가 지금 씻고 있어서요~",
    name: "김OO",
    tags: ["택배", "배달", "당근"],
  },
  {
    
    title: "지금 못 나가요",
    name: "슈퍼톤AI - VoiceA",
    tags: ["택배", "배달", "당근"],
  },{
    
    title: "네~",
    name: "슈퍼톤AI - VoiceB",
    tags: ["택배", "배달", "당근"],
  },{
    
    title: "아니요~",
    name: "슈퍼톤AI - VoiceB",
    tags: ["택배", "배달", "당근"],
  }
];

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
        {audioMockData.map((item, index) => (
        <AudioItem
          key={index}
          title={item.title}
          name={item.name}
          tags={item.tags}
        />
      ))}
        <FooterWrapper>
          <Footer />
        </FooterWrapper>
      </Container>}
    </>
  );
}