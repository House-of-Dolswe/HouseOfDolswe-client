import { useState, useEffect, useRef } from "react";
import Picker from "react-mobile-picker";
import styled from "styled-components";
import Footer from "../components/footer";
import Header from "../components/header";

interface TimePickerProps {
  onSelect?: (time: {
    hours: number;
    minutes: number;
    seconds: number;
  }) => void;
}

export default function Call({ onSelect }: TimePickerProps) {
 const [value, setValue] = useState({
    hours: "0",
    minutes: "0",
    seconds: "0",
  });

  const [hasInteracted, setHasInteracted] = useState(false);
  const [totalSeconds, setTotalSeconds] = useState<number | null>(null);
  const [isRunning, setIsRunning] = useState(false);

  const timerRef = useRef<number | null>(null);

  const hoursList = Array.from({ length: 24 }, (_, i) => i.toString());
  const minutesList = Array.from({ length: 60 }, (_, i) => i.toString());
  const secondsList = Array.from({ length: 60 }, (_, i) => i.toString());

  const handleChange = (newValue: typeof value) => {
    if (isRunning) return;

    if (!hasInteracted) setHasInteracted(true);
    setValue(newValue);

    onSelect?.({
      hours: Number(newValue.hours),
      minutes: Number(newValue.minutes),
      seconds: Number(newValue.seconds),
    });
  };

  const secondsToPickerValue = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;

    return {
      hours: h.toString(),
      minutes: m.toString(),
      seconds: s.toString(),
    };
  };

  const startTimer = () => {
  const seconds =
    Number(value.hours) * 3600 +
    Number(value.minutes) * 60 +
    Number(value.seconds);

  if (seconds <= 0) return;

  setTotalSeconds(seconds);
  setIsRunning(true);
};


  const resetTimer = () => {
    setIsRunning(false);
    setTotalSeconds(0);
    setValue({ hours: "0", minutes: "0", seconds: "0" });
  };

  useEffect(() => {
  if (!isRunning || totalSeconds === null) return;

  timerRef.current = window.setInterval(() => {
    setTotalSeconds((prev) => {
      if (prev === null) return prev;

      if (prev === 0) {
        clearInterval(timerRef.current!);
        setIsRunning(false);
        return 0;
      }

      const next = prev - 1;
      setValue(secondsToPickerValue(next));
      return next;
     });
   }, 1000);

   return () => clearInterval(timerRef.current!);
  }, [isRunning]);



  return (
    <>
       <Header />
       <TitleBar>돌쇠의 전화 Beta</TitleBar>

<PickerContainer>
  {/* 시 */}
  <PickerColumnWrapper>
    <Picker value={value} onChange={handleChange} height={170} itemHeight={33}>
      <Picker.Column name="hours">
        {hoursList.map((item) => (
          <StyledItem
            key={item}
            value={item}
            selected={value.hours === item}
          >
            {item}
          </StyledItem>
        ))}
      </Picker.Column>
    </Picker>
    <UnitText>시간</UnitText>
  </PickerColumnWrapper>

  {/* 분 */}
  <PickerColumnWrapper>
    <Picker value={value} onChange={handleChange} height={170} itemHeight={33}>
      <Picker.Column name="minutes">
        {minutesList.map((item) => (
          <StyledItem
            key={item}
            value={item}
            selected={value.minutes === item}
          >
            {item}
          </StyledItem>
        ))}
      </Picker.Column>
    </Picker>
    <UnitText>분</UnitText>
  </PickerColumnWrapper>

  {/* 초 */}
  <PickerColumnWrapper>
    <Picker value={value} onChange={handleChange} height={170} itemHeight={33}>
      <Picker.Column name="seconds">
        {secondsList.map((item) => (
          <StyledItem
            key={item}
            value={item}
            selected={value.seconds === item}
          >
            {item}
          </StyledItem>
        ))}
      </Picker.Column>
    </Picker>
    <UnitText>초</UnitText>
  </PickerColumnWrapper>
</PickerContainer>

      <ButtonRow>
        {!isRunning ? (
          <ActionButton isRunning={false} onClick={startTimer}>시작</ActionButton>
        ) : (
          <ActionButton isRunning={true} onClick={resetTimer}>취소</ActionButton>
        )}
      </ButtonRow>

      <Footer />
    </>
  );
}


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
const PickerContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 11vw;
  margin-top: 13vh;
`;

const PickerColumnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const UnitText = styled.div`
  margin-left: 2vw;
  font-size: 4vw;
  color: black;
`;

const StyledItem = styled(Picker.Item)<{ selected: boolean }>`
  height: 38px;
  line-height: 38px;
  text-align: center;
  font-size: ${({ selected }) => (selected ? "8vw" : "5vw")};
  color: ${({ selected }) => (selected ? "#000" : "rgba(0, 0, 0, 0.4)")};
  font-weight: ${({ selected }) => (selected ? "400" : "300")};
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
`;

const ActionButton = styled.button<{isRunning: boolean}>`
  padding: 7vw 3vh;
  font-size: 3.5vw;
  border-radius: 8px;
  border: none;
  border-radius: 50%;
  background: ${({ isRunning }) =>
    isRunning ? "#F2F2F2" : "rgba(163, 4, 255, 0.2)"};
  color: ${({ isRunning }) => (isRunning ? "#000000" : "#A304FF")};
  margin-top: 7vh;
`;