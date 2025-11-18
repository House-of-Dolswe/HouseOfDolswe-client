import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ChatExample from "../../public/chatExample.svg";

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
            <ChatImg src={ChatExample} alt="Logo Text White" />
          </SlideBox>
          <SlideBox>2단계 화면</SlideBox>
          <SlideBox>3단계 화면</SlideBox>
          <SlideBox>4단계 화면</SlideBox>
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

const ChatImg = styled.img`
  display: block;
  margin: 0 auto;
  margin-top: 15vh;
  width: 55vw;
  height: auto;
`;


const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 5vh;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
  border: 1px solid red;
`;

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 10px;
`;
