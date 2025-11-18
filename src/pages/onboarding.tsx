import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ChatExample from "../../public/chatExample.svg";
import SituationExample from "../../public/situationExample.svg";


export default function Onboarding() {
  const navigate = useNavigate();
  const sliderRef = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4;

  const nextSlide = () => sliderRef.current?.slickNext();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
    accessibility: false,
    arrows: false,
    afterChange: (index: number) => setCurrentSlide(index)
  };

  return (
    <Container>
      <SliderWrapper>
        <Slider {...settings} ref={sliderRef}>
          <SlideBox>
            <SlideText>돌쇠의 집은<br />돌쇠의 목소리 아카이브예요</SlideText>
            <ChatImg 
              src={ChatExample} 
              alt="Chatting Example"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </SlideBox>
          <SlideBox>
            <SlideText>사용자님,<br />어떤 상황에서<br />돌쇠의 집을 쓰고 싶으신가요?</SlideText>
          </SlideBox>
          <SlideBox>
            <SlideText>연령대를 알려주세요</SlideText>
          </SlideBox>
          <SlideBox>
            <SlideText>이런 상황에서<br />돌쇠의 집을 활용해보세요</SlideText>
            <SituationImg 
              src={SituationExample} 
              alt="Situation Example"
              animate={currentSlide === 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
             />
          </SlideBox>
        </Slider>
      </SliderWrapper>

      <ButtonWrapper>
        {currentSlide < totalSlides - 1 ? (
          <Button onClick={nextSlide}>다음</Button>
        ) : (
          <Button onClick={() => navigate("/audio")}>시작하기</Button>
        )}
      </ButtonWrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100dvh;
  position: relative;
  overflow: hidden;
`;

const SliderWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;


  .slick-list {
    height: 100%;
  }

  .slick-track {
    height: 100%;
  }

  .slick-slide {
    height: 100%;
  }

  .slick-slide > div {
    height: 100%;
  }
`;


const SlideBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 2rem;
`;

const SlideText = styled.p`
  font-size: 6vw;
  font-weight: bold;
  padding: 8vh 0 0 8vw;
`

const ChatImg = styled(motion.img)`
  display: block;
  margin: 0 auto;
  margin-top: 15vh;
  width: 55vw;
  height: auto;
`;

const SituationImg = styled(motion.img)`
  display: block;
  margin: 0 auto;
  margin-top: 10vh;
  width: 75vw;
  height: auto;
`;


const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 5vh;
  width: 100%;
  height: 6vh; 
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const Button = styled.button`
  width: 88%;
  border: none;
  background: #000000;
  color: white;
  padding: 10px 20px;
  border-radius: 12px;
  font-size: 1rem;
`;
